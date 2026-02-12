import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";
import Masonry from "react-masonry-css";

import { CalendarIcon, MapPinIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import EventCard from "./EventCard";
import { useLocation } from "@/hooks";

import type { Social } from "@/types/eventTypes";

const Socials = () => {
  const { location } = useLocation();
  const navigate = useNavigate();
  const [socials, setSocials] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [hasUpcomingEvents, setHasUpcomingEvents] = useState(false);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "events"));
      const now = new Date();

      let allEventsData: Social[] = querySnapshot.docs
        .map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            ...data,
            createdAt: (data.createdAt as Timestamp).toDate(),
            startTime: (data.startTime as Timestamp).toDate(),
            endTime: (data.endTime as Timestamp).toDate(),
          } as Social;
        });

      // Apply location filtering first
      if (location && location.state !== "any") {
        allEventsData = allEventsData.filter((event) => {
          const eventState = event.location?.state;
          const eventCity = event.location?.city;

          if (location.city && location.city !== "any") {
            return eventState === location.state && eventCity === location.city;
          }

          return eventState === location.state;
        });
      }

      // Check if there are upcoming events (for showing the past events button)
      const upcomingEvents = allEventsData.filter((event) => event.endTime > now);
      setHasUpcomingEvents(upcomingEvents.length > 0);

      // Filter events based on showPastEvents state
      let eventsData: Social[];
      if (showPastEvents) {
        // Show past events (endTime in the past), sorted by most recent first
        eventsData = allEventsData
          .filter((event) => event.endTime <= now)
          .sort((a, b) => b.endTime.getTime() - a.endTime.getTime());
      } else {
        // Show upcoming events (endTime in the future), sorted by earliest first
        eventsData = allEventsData
          .filter((event) => event.endTime > now)
          .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
      }

      setSocials(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
      setSocials([]);
    } finally {
      setLoading(false);
    }
  }, [location, showPastEvents]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };

  // Empty state component
  const EmptyState = () => {
    const getLocationText = () => {
      if (!location || location.state === "any") {
        return showPastEvents ? "No past events found" : "No upcoming events posted yet";
      }

      if (location.city && location.city !== "any") {
        return showPastEvents 
          ? `No past events found for ${location.city}, ${location.state}`
          : `No upcoming events posted for ${location.city}, ${location.state}`;
      }

      return showPastEvents 
        ? `No past events found for ${location.state}`
        : `No upcoming events posted for ${location.state}`;
    };

    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          {showPastEvents ? (
            <Clock className="w-8 h-8 text-muted-foreground" />
          ) : (
            <CalendarIcon className="w-8 h-8 text-muted-foreground" />
          )}
        </div>
        <h3 className="text-lg font-semibold mb-2">
          {showPastEvents ? "No Past Events Found" : "No Upcoming Events Found"}
        </h3>
        <p className="text-muted-foreground mb-4 max-w-md">
          {getLocationText()}. {!showPastEvents && "Check back later or try selecting a different location."}
        </p>
        
        {!showPastEvents && !hasUpcomingEvents && (
          <div className="space-y-3">
            <Button 
              onClick={() => setShowPastEvents(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              View Past Events
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPinIcon className="w-4 h-4" />
              <span>
                Use the location selector above to find events in other areas
              </span>
            </div>
          </div>
        )}
        
        {showPastEvents && (
          <Button 
            onClick={() => setShowPastEvents(false)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            View Upcoming Events
          </Button>
        )}
      </div>
    );
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p>Loading events...</p>
      </div>
    );
  }

  if (socials.length === 0) {
    return <EmptyState />;
  }

  const breakpointColumnsObj = {
    default: 3,  // Default: 3 columns (viewport > 1024px)
    1024: 2,     // Medium screens: 2 columns (641px - 1024px)
    640: 1,      // Small screens: 1 column (0px - 640px)
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-2 md:px-4 lg:px-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {socials.map((social) => (
          <div
            key={social.id}
            role="button"
            tabIndex={0}
            className="w-full cursor-pointer"
            onClick={() => handleEventClick(social.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleEventClick(social.id);
              }
            }}
          >
            <EventCard social={social} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Socials;

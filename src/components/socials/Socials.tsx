import { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";

import EventCard from "./EventCard";
import { useLocation } from "@/hooks";

import type { Social } from "@/types/eventTypes";

const Socials = () => {
  const [socials, setSocials] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);
  const { location } = useLocation();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const now = new Date();

        let eventsData: Social[] = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();

            return {
              id: doc.id,
              ...data,
              createdAt: (data.createdAt as Timestamp).toDate(),
              startTime: (data.startTime as Timestamp).toDate(),
              endTime: (data.endTime as Timestamp).toDate(),
            } as Social;
          }) // Filter only upcoming events (endTime in the future)
          .filter((event) => event.endTime > now)
          // Sort by start time (earliest first)
          .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

        // Apply location filtering if a location is selected
        if (location && location.state !== "any") {
          eventsData = eventsData.filter((event) => {
            const eventState = event.location?.state;
            const eventCity = event.location?.city;
            
            if (location.city && location.city !== "any") {
              return eventState === location.state && eventCity === location.city;
            }
            
            return eventState === location.state;
          });
        }

        setSocials(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [location]);

  // Skeleton loader component
  const EventSkeleton = () => (
    <Card className="break-inside-avoid mb-4 mx-2">
      <CardHeader>
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-48 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );

  // Empty state component
  const EmptyState = () => {
    const getLocationText = () => {
      if (!location || location.state === "any") {
        return "No events posted yet";
      }
      
      if (location.city && location.city !== "any") {
        return `No events posted for ${location.city}, ${location.state}`;
      }
      
      return `No events posted for ${location.state}`;
    };

    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <CalendarIcon className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No Events Found</h3>
        <p className="text-muted-foreground mb-4 max-w-md">
          {getLocationText()}. Check back later or try selecting a different location.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="w-4 h-4" />
          <span>Use the location selector above to find events in other areas</span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="grid gap-4 grid-cols-1 mx-4 sm:grid-cols-2 sm:mx-2 lg:grid-cols-3 lg:mx-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <EventSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (socials.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-4 grid-cols-1 mx-4 sm:grid-cols-2 sm:mx-2 lg:grid-cols-3 lg:mx-4">
      {socials.map((social) => (
        <div key={social.id} className="break-inside-avoid w-full">
          <EventCard social={social} />
        </div>
      ))}
    </div>
  );
};

export default Socials;

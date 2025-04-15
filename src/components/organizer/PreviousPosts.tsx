import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";

import EventCard from "../socials/EventCard";
import type { Social } from "@/types/eventTypes";

const PreviousPosts = () => {
  const [user] = useAuthState(auth);
  const [previousEvents, setPreviousEvents] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchPreviousEvents = async () => {
      try {
        const organizerEventsRef = collection(
          db,
          `organizers/${user.uid}/events`
        );
        const q = query(organizerEventsRef, orderBy("endTime", "desc"));

        const snapshot = await getDocs(q);
        const eventsData: Social[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt.toDate(),
            startTime: data.startTime.toDate(),
            endTime: data.endTime.toDate(),
          } as Social;
        });

        setPreviousEvents(eventsData);
      } catch (error) {
        console.error("Error fetching previous posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreviousEvents();
  }, [user]);

  if (!user) return <p>Please log in to view your previous posts.</p>;
  if (loading) return <p>Loading previous posts...</p>;

  return (
    <div className="flex flex-col">
      {previousEvents.map((event) => (
        <EventCard key={event.id} social={event} />
      ))}
    </div>
  );
};

export default PreviousPosts;

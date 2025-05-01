import { useEffect, useState } from "react";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

import EventCard from "./EventCard";

import type { Social } from "@/types/eventTypes";

const Socials = () => {
  const [socials, setSocials] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const now = new Date();

        const eventsData: Social[] = querySnapshot.docs
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

        console.log(eventsData);

        setSocials(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;

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

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import EventCard from "../socials/EventCard";

import type { Social } from "@/types/eventTypes";

const PostHistory = () => {
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
        const q = query(organizerEventsRef, orderBy("createdAt", "desc"));

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

  const handleDelete = async (eventId: string) => {
    if (!user) return;

    try {
      // Delete from global events collection
      const globalEventRef = doc(db, "events", eventId);
      await deleteDoc(globalEventRef);

      // Delete from organizer's subcollection
      const organizerEventRef = doc(
        db,
        `organizers/${user.uid}/events`,
        eventId
      );
      await deleteDoc(organizerEventRef);

      toast.success("Event deleted successfully!");

      setPreviousEvents((prev) => prev.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  if (previousEvents.length === 0) {
    return <p className="mt-2">No previously events posted</p>;
  }

  return (
    <div className="flex flex-col">
      {previousEvents.map((event) => (
        <div key={event.id} className="border rounded-md p-2 m-2 relative">
          <EventCard social={event} />

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to delete this event?
                </DialogTitle>
                <DialogDescription>
                  This will permanently delete the event from both your
                  organizer account and the global events list
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(event.id)}
                >
                  Confirm Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export default PostHistory;

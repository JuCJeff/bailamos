import { useState } from "react";
import { auth, db, storage } from "@/firebase/config";
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";

import { EventFormValues } from "@/schemas/eventSchema";
import { useOrganizerSocialLink } from "@/hooks/organizer";

export const useSubmitEvent = () => {
  const [loading, setLoading] = useState(false);
  const { socialLink: organizerSocialLink, websiteLink } =
    useOrganizerSocialLink();

  const submitEvent = async (data: EventFormValues) => {
    setLoading(true);

    const user = auth.currentUser;
    if (!user) {
      toast.error("You must be signed in to create an event.");
      setLoading(false);
      return;
    }

    let imageUrl = "";
    try {
      if (data.image instanceof File) {
        const imageRef = ref(
          storage,
          `events/${Date.now()}-${data.image.name}`
        );
        await uploadBytes(imageRef, data.image);
        imageUrl = await getDownloadURL(imageRef);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed.");
      setLoading(false);
      return;
    }

    const eventData = {
      title: data.title,
      startTime: data.startTime,
      endTime: data.endTime,
      imageUrl,
      description: data.description?.trim(),
      price: data.price,
      eventTags: data.eventTags ?? [],
      music: data.music,
      musicPercentages: data.musicPercentages,
      location: data.location,
      city: data.location?.city ?? "",
      state: data.location?.state ?? "",
      link: data.link,
      organizerId: user.uid,
      organizerSocialLink,
      websiteLink,
      createdAt: serverTimestamp(),
    };

    try {
      const newDocRef = doc(collection(db, "events"));
      const eventId = newDocRef.id;

      const city = eventData.location?.city ?? "Unknown City";
      const state = eventData.location?.state ?? "Unknown State";

      const stateRef = doc(db, "states", state);
      const stateSnap = await getDoc(stateRef);

      await setDoc(newDocRef, eventData);

      if (!stateSnap.exists()) {
        await setDoc(stateRef, {});
      }

      const cityEventRef = doc(
        db,
        "states",
        state,
        "cities",
        city,
        "events",
        eventId
      );
      await setDoc(cityEventRef, eventData);

      await setDoc(
        doc(db, "organizers", user.uid, "events", eventId),
        eventData
      );

      toast.success("Event created!", {
        description: new Date().toLocaleString(),
      });

      console.log("Event successfully created!");
    } catch (error) {
      console.error("Firestore error:", error);
      toast.error("Failed to save event to Firestore.");
    }

    setLoading(false);
  };

  return { onSubmit: submitEvent, loading };
};

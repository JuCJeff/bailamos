import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth, db, storage } from "@/firebase/config";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { eventSchema, EventFormValues } from "@/schemas/eventSchema";

import ImageUpload from "./ImageUpload";
import GoogleMapLocation from "./GoogleMapLocation";
import PriceInputField from "./PriceInputField";
import MusicPercentageField from "./MusicPercentageField";
import { DateTimePicker } from "./DateTimePicker";
import MusicSelectionField from "./MusicSelectionField";
import EventCard from "@/components/socials/EventCard";

import { useOrganizerSocialLink } from "@/hooks/organizer";

import { music } from "@/data/event";

const EventForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      music: ["bachata", "salsa"],
      location: {},
      musicPercentages: {
        ...Object.fromEntries(
          music.map((item) => [
            item.id,
            {
              name: item.label,
              percentage: item.id === "bachata" || item.id === "salsa" ? 50 : 0,
            },
          ])
        ),
        others: { name: "Others", percentage: 0 },
      },
    },
  });

  const { socialLink: organizerSocialLink } = useOrganizerSocialLink();

  const formValues = form.watch(); // 👀 Watch all form values

  const onSubmit = async (data: EventFormValues) => {
    setLoading(true);

    let imageUrl = "";
    const user = auth.currentUser;

    if (!user) {
      console.error("User not authenticated");
      setLoading(false);
      return;
    }

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
      setLoading(false);
      return; // Stop submission if image upload fails
    }

    const eventData = {
      title: data.title,
      startTime: data.startTime,
      endTime: data.endTime,
      imageUrl,
      description: data.description?.trim(),
      price: data.price,
      music: data.music,
      musicPercentages: data.musicPercentages,
      location: data.location,
      link: data.link,
      organizerId: user.uid,
      organizerSocialLink,
      createdAt: serverTimestamp(),
    };

    try {
      // Generate a consistent ID
      const newDocRef = doc(collection(db, "events"));
      const eventId = newDocRef.id;

      // Save to global collection
      await setDoc(newDocRef, eventData);

      // Save to organizer subcollection using same ID
      await setDoc(
        doc(db, "organizers", user.uid, "events", eventId),
        eventData
      );

      toast.success("Event created!", {
        description: new Date().toLocaleString(),
        action: {
          label: "Close",
          onClick: () => {},
        },
      });

      console.log("Event successfully created in both collections!");
    } catch (error) {
      toast.error("There was an error saving your event. Please try again", {
        description: error instanceof Error ? error.message : "Firestore error",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      console.error("Firestore error:", error);
    }

    setLoading(false);
  };

  // Clean up the blob URL when the image changes or the component unmounts
  useEffect(() => {
    if (formValues.image instanceof File) {
      const objectUrl = URL.createObjectURL(formValues.image);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [formValues.image]);

  return (
    <div className={cn("w-full flex flex-col gap-6 m-2", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center py-2 gap-4"
            >
              {/* Title Field */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="text-start">
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <FormControl>
                      <Input id="title" placeholder="Dance Social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location Field */}
              <GoogleMapLocation control={form.control} name="location" />

              {/* Start Time Field */}
              <DateTimePicker
                form={form}
                label="Start time"
                formFieldName="startTime"
              />

              {/* Start Time Field */}
              <DateTimePicker
                form={form}
                label="End time"
                formFieldName="endTime"
              />

              {/* Image Upload Field */}
              <ImageUpload control={form.control} name="image" />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price Field */}
              <PriceInputField control={form.control} name="price" />

              {/* Music Field */}
              <MusicSelectionField control={form.control} name="music" />

              {/* Music Percentage Field */}
              <MusicPercentageField />

              {/* Additional Link Field */}
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="event link (optional)"
                        aria-label="link for additional details"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </form>
          </Form>
          <div className="flex gap-4 justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  disabled={!form.formState.isValid}
                >
                  Preview Event
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Preview Event</DialogTitle>
                </DialogHeader>

                <div className="text-center overflow-y-auto max-h-[75vh]">
                  <EventCard
                    social={{
                      id: "preview",
                      ...formValues,
                      imageUrl:
                        formValues.image instanceof File
                          ? URL.createObjectURL(formValues.image)
                          : "",
                      createdAt: new Date(),
                      organizerSocialLink: organizerSocialLink ?? "",
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  disabled={loading || !form.formState.isValid}
                  onClick={() => setOpenDialog(true)}
                >
                  {loading ? "Submitting..." : "Post Event"}
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Event Submission</DialogTitle>
                </DialogHeader>
                <p>
                  Are you sure you want to post this event? Please double-check
                  your details 💃
                </p>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    onClick={form.handleSubmit((data) => {
                      setOpenDialog(false);
                      onSubmit(data);
                    })}
                    disabled={loading || !form.formState.isValid}
                  >
                    Yes, Post It
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventForm;

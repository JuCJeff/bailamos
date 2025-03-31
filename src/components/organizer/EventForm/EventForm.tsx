import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { db, storage } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

import { music } from "@/data/event";

const EventForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const [loading, setLoading] = useState(false);

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
        others: { name: "Others", percentage: 0 }, // ✅ Adding "others" properly
      },
    },
  });

  const onSubmit = async (data: EventFormValues) => {
    setLoading(true);

    let imageUrl = "";
    if (data.image) {
      const imageRef = ref(storage, `events/${Date.now()}-${data.image.name}`);
      await uploadBytes(imageRef, data.image);
      imageUrl = await getDownloadURL(imageRef);
    }

    await addDoc(collection(db, "events"), {
      title: data.title,
      startTime: data.startTime,
      endTime: data.endTime,
      imageUrl, // Save the Firestore URL instead of the File
      description: data.description,
      price: data.price,
      music: data.music,
      musicPercentages: data.musicPercentages,
      location: data.location,
      organizerId: "",
      createdAt: serverTimestamp(),
    });

    setLoading(false);
  };

  return (
    <div className={cn("flex flex-col gap-6 m-2", className)} {...props}>
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

              <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Post Event"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventForm;

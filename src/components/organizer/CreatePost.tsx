import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db, storage } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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

import EventDate from "./EventDate";
import ImageUpload from "./ImageUpload";
import GoogleMapsLocation from "./GoogleMapLocation";

import { music } from "@/data/event";

const eventSchema = z.object({
  title: z.string().min(3, "Title is required"),
  date: z.date(),
  price: z.number(),
  description: z.string().optional(),
  image: z.instanceof(File).optional(),
  music: z.array(z.string()).nonempty("Select at least one category"),
  location: z
    .object({
      propertyName: z.string().optional(),
      address: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      googleMapsUrl: z.string().optional(),
      lat: z.number().optional(),
      lng: z.number().optional(),
    })
    .optional(),
});

export type EventFormValues = z.infer<typeof eventSchema>;

const CreatePost = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const [loading, setLoading] = useState(false);
  const [isFreeEvent, setIsFreeEvent] = useState(false);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: { music: ["bachata", "salsa"], location: {} },
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
      date: data.date,
      imageUrl, // Save the Firestore URL instead of the File
      description: data.description,
      price: data.price,
      music: data.music,
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
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Dance Social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location Field */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Location</FormLabel>
                    <FormControl>
                      <GoogleMapsLocation control={form.control} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date Field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <EventDate
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image Upload Field */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value || undefined}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type the event description here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price Field */}
              {!isFreeEvent && (
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <span className="pe-1">$</span>
                          <Input
                            placeholder="Price"
                            type="number"
                            value={field.value || ""}
                            onChange={(e) => {
                              const value = e.target.value
                                ? Number(e.target.value)
                                : 0;
                              field.onChange(value);
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Checkbox to mark as free event */}
              <div className="flex">
                <Checkbox
                  id="freeEvent"
                  checked={isFreeEvent}
                  onCheckedChange={() => {
                    setIsFreeEvent(!isFreeEvent);
                    form.setValue("price", 0);
                  }}
                />
                <label
                  htmlFor="freeEvent"
                  className="px-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  This is a free event
                </label>
              </div>

              {/* Music Field */}
              <FormItem>
                <FormLabel className="text-base">Music</FormLabel>
                {music.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="music"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>

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

export default CreatePost;

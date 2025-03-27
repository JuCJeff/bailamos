import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3, "Title is required"),
  date: z.date(),
  startTime: z.date({
    required_error: "A date and time is required.",
  }),
  endTime: z.date({
    required_error: "A date and time is required.",
  }),
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

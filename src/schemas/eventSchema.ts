import { z } from "zod";

const MusicPercentageSchema = z.object({
  name: z.string(),
  percentage: z.number().max(100, "Percentage cannot exceed 100%"),
});

export const eventSchema = z.object({
  title: z.string().min(3, "Title is required"),
  startTime: z.date({
    required_error: "A start date and time is required",
  }),
  endTime: z.date({
    required_error: "An end date and time is required",
  }),
  price: z.number(),
  description: z.string().optional(),
  image: z.instanceof(File).optional(),
  link: z.string().optional(),
  eventTags: z.array(z.string()).optional().default([]),
  music: z.array(z.string()).nonempty("Select at least one category"),
  musicPercentages: z
    .record(z.string(), MusicPercentageSchema)
    .and(
      z
        .object({
          others: MusicPercentageSchema,
        })
        .optional()
    )
    .refine(
      (percentages) =>
        Object.values(percentages).reduce(
          (sum, item) => sum + item.percentage,
          0
        ) <= 100,
      {
        message: "Total music percentages cannot exceed 100%",
      }
    ),
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
  city: z.string().optional(),
  state: z.string().optional(),
});

export type EventFormValues = z.infer<typeof eventSchema>;

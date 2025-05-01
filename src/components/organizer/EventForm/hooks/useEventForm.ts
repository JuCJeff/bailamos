import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema, EventFormValues } from "@/schemas/eventSchema";
import { music } from "@/data/event";

export const useEventForm = () => {
  return useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      music: ["bachata", "salsa"],
      location: {},
      eventTags: [],
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
};

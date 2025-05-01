import type { Control } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { EventFormValues } from "@/schemas/eventSchema";

interface LinkFieldProps {
  control: Control<EventFormValues>;
  name: "link";
}

const LinkField = ({ control, name }: LinkFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
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
  );
};

export default LinkField;

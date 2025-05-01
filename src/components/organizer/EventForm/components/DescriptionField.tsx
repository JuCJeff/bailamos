import { useState } from "react";
import { useController, Control } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { EventFormValues } from "@/schemas/eventSchema";

interface DescriptionFieldProps {
  control: Control<EventFormValues>;
  name: "description";
}

const DescriptionField = ({ control, name }: DescriptionFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const [localValue, setLocalValue] = useState(field.value ?? "");

  const handleBlur = () => {
    field.onChange(localValue);
    field.onBlur();
  };

  return (
    <FormItem>
      <FormLabel>Description</FormLabel>
      <FormControl>
        <Textarea
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
          placeholder="Describe your event..."
        />
      </FormControl>
      <FormMessage>{error?.message}</FormMessage>
    </FormItem>
  );
};

export default DescriptionField;

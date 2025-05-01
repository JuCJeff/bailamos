import { Input } from "@/components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useController, type Control } from "react-hook-form";
import type { EventFormValues } from "@/schemas/eventSchema";

interface TitleFieldProps {
  control: Control<EventFormValues>;
  name: "title";
}

const TitleField = ({ control, name }: TitleFieldProps) => {
  const {
    field: { ref, onBlur, onChange, ...rest },
    fieldState: { error },
  } = useController({ control, name });

  return (
    <FormItem className="text-start">
      <FormLabel htmlFor="title">Title</FormLabel>
      <FormControl>
        <Input
          id="title"
          placeholder="Dance Social"
          defaultValue={rest.value}
          onBlur={(e) => {
            onChange(e.target.value);
            onBlur();
          }}
          ref={ref}
        />
      </FormControl>
      <FormMessage>{error?.message}</FormMessage>
    </FormItem>
  );
};

export default TitleField;

import { Control, useController } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { eventTags } from "@/data/event";
import type { EventFormValues } from "@/schemas/eventSchema";

interface EventTagsFieldProps {
  control: Control<EventFormValues>;
  name: "eventTags";
}

const EventTagsField = ({ control, name }: EventTagsFieldProps) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const handleTagToggle = (checked: boolean, tag: string) => {
    const updatedTags = checked
      ? [...(value || []), tag]
      : (value || []).filter((t: string) => t !== tag);
    onChange(updatedTags);
  };

  return (
    <FormItem className="space-y-2">
      <FormLabel>Event Tags</FormLabel>
      <div className="flex flex-wrap gap-2 max-sm:flex-col">
        {eventTags.map((tag) => (
          <div key={tag} className="flex items-center gap-1">
            <Checkbox
              id={tag}
              checked={value?.includes(tag)}
              onCheckedChange={(checked) => handleTagToggle(!!checked, tag)}
            />
            <FormLabel htmlFor={tag} className="text-sm font-normal">
              {tag}
            </FormLabel>
          </div>
        ))}
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default EventTagsField;

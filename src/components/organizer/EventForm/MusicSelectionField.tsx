import { Control, useController, useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { music } from "@/data/event";
import type { EventFormValues } from "@/schemas/eventSchema";

interface MusicSelectionFieldProps {
  control: Control<EventFormValues>;
  name: "music";
}

const MusicSelectionField = ({ control, name }: MusicSelectionFieldProps) => {
  const { getValues, setValue } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const handleMusicSelection = (checked: boolean, itemId: string) => {
    const newSelectedMusic = checked
      ? [...(value || []), itemId]
      : value?.filter((id: string) => id !== itemId) || [];
    onChange(newSelectedMusic);

    if (!checked) {
      const musicPercentages = getValues("musicPercentages") || {};
      const updatedMusicPercentages = Object.fromEntries(
        Object.entries(musicPercentages).filter(([key]) => key !== itemId)
      );
      setValue("musicPercentages", updatedMusicPercentages);
    }
  };

  return (
    <FormItem>
      <FormLabel>Music</FormLabel>
      {music.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <Checkbox
            id={item.id}
            checked={value?.includes(item.id)}
            onCheckedChange={(checked) =>
              handleMusicSelection(!!checked, item.id)
            }
          />
          <FormLabel htmlFor={item.id} className="text-sm font-normal">
            {item.label}
          </FormLabel>
        </div>
      ))}
      <FormMessage />
    </FormItem>
  );
};

export default MusicSelectionField;

import { useState } from "react";
import { Control, useController } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import type { EventFormValues } from "@/schemas/eventSchema";

interface PriceInputFieldProps {
  control: Control<EventFormValues>;
  name: "price";
}

const PriceInputField = ({ control, name }: PriceInputFieldProps) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const [isFreeEvent, setIsFreeEvent] = useState(value === 0);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value ? Number(e.target.value) : 0;
    onChange(price);
    if (price > 0) {
      setIsFreeEvent(false);
    }
  };

  const handleFreeEventToggle = () => {
    const newIsFree = !isFreeEvent;
    setIsFreeEvent(newIsFree);
    onChange(newIsFree ? 0 : "");
  };

  return (
    <div className="space-y-2">
      {/* Price Input */}
      {!isFreeEvent && (
        <FormField
          control={control}
          name={name}
          render={() => (
            <FormItem>
              <FormLabel htmlFor="price">Price</FormLabel>
              <FormControl>
                <div className="flex items-center">
                  <span className="pe-1">$</span>
                  <Input
                    placeholder="Price"
                    id="price"
                    type="number"
                    value={value || ""}
                    onChange={handlePriceChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Free Event Checkbox */}
      <div className="flex items-center">
        <Checkbox
          id="freeEvent"
          checked={isFreeEvent}
          onCheckedChange={handleFreeEventToggle}
        />
        <label
          htmlFor="freeEvent"
          className="px-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          This is a free event
        </label>
      </div>
    </div>
  );
};

export default PriceInputField;

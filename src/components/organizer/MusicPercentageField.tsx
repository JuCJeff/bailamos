import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { music } from "@/data/event";

const MusicPercentageField = () => {
  const { control, watch } = useFormContext();
  const selectedMusic: string[] = watch("music", ["bachata", "salsa"]);

  return (
    <Controller
      control={control}
      name="musicPercentages"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-base">Music Breakdown</FormLabel>
          {selectedMusic.length === 0 ? (
            <p className="text-start text-sm text-gray-500">
              No music categories selected
            </p>
          ) : (
            selectedMusic.map((musicId) => {
              const musicItem = music.find((m) => m.id === musicId);
              return (
                <FormItem
                  key={musicId}
                  className="flex items-center justify-between gap-2"
                >
                  <FormLabel className="w-1/3 text-sm font-medium">
                    {musicItem?.label}
                  </FormLabel>
                  <div className="flex items-center gap-1">
                    <FormControl>
                      <Input
                        type="number"
                        value={field.value?.[musicId]?.percentage || ""}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          field.onChange({
                            ...field.value,
                            [musicId]: {
                              name: musicItem?.label ?? "",
                              percentage: value,
                            },
                          });
                        }}
                        placeholder="0"
                        className="flex grow"
                      />
                    </FormControl>
                    <span>%</span>
                  </div>
                </FormItem>
              );
            })
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MusicPercentageField;

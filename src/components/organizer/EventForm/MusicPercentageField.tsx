import { Controller, useFormContext } from "react-hook-form";
import { useEffect, useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { music } from "@/data/event";

const MusicPercentageField = () => {
  const { control, watch, setValue, trigger } = useFormContext();

  const selectedMusic: string[] = watch("music", ["bachata", "salsa"]);
  const musicPercentages: Record<
    string,
    { percentage: number; name?: string }
  > = watch("musicPercentages", {});

  const [tempValues, setTempValues] = useState<Record<string, string>>({});

  const recalculateOthers = useCallback(() => {
    const totalPercentage = Object.entries(musicPercentages)
      .filter(([key]) => key !== "others")
      .reduce((sum, [, item]) => sum + (item?.percentage ?? 0), 0);

    const remaining = Math.max(100 - totalPercentage, 0); // Ensure non-negative values

    if (remaining > 0) {
      setValue("musicPercentages.others", {
        name: "Others",
        percentage: remaining,
      });

      if (!selectedMusic.includes("others")) {
        setValue("music", [...selectedMusic, "others"]);
      }
    } else {
      setValue("musicPercentages.others", { name: "Others", percentage: 0 });

      if (selectedMusic.includes("others")) {
        setValue(
          "music",
          selectedMusic.filter((id) => id !== "others")
        );
      }
    }

    trigger("musicPercentages"); // Revalidate form fields
  }, [musicPercentages, selectedMusic, setValue, trigger]);

  useEffect(() => {
    recalculateOthers();
  }, [musicPercentages, recalculateOthers]);

  useEffect(() => {
    const allKeys = Object.keys(musicPercentages);

    const toRemove = allKeys.filter(
      (key) =>
        key !== "others" &&
        !selectedMusic.includes(key) &&
        key !== "bachata" &&
        key !== "salsa"
    );

    toRemove.forEach((key) => {
      setValue(`musicPercentages.${key}`, {
        name: music.find((m) => m.id === key)?.label ?? key,
        percentage: 0,
      });

      setTempValues((prev) => ({
        ...prev,
        [key]: "0",
      }));
    });

    selectedMusic.forEach((key) => {
      if (
        !musicPercentages[key] &&
        key !== "others" &&
        key !== "bachata" &&
        key !== "salsa"
      ) {
        setValue(`musicPercentages.${key}`, {
          name: music.find((m) => m.id === key)?.label ?? key,
          percentage: 0,
        });

        setTempValues((prev) => ({
          ...prev,
          [key]: "0",
        }));
      }
    });
  }, [selectedMusic, setValue, musicPercentages]);

  return (
    <FormItem className="space-y-2">
      <FormLabel>Music Breakdown</FormLabel>
      {selectedMusic.length === 0 ? (
        <p className="text-start text-sm text-gray-500">
          No music categories selected
        </p>
      ) : (
        selectedMusic.map((musicId) => {
          const musicItem = music.find((m) => m.id === musicId);

          return (
            musicItem && (
              <Controller
                key={musicId}
                control={control}
                name={`musicPercentages.${musicId}.percentage`}
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between gap-2">
                    <FormLabel className="w-1/3 text-sm font-medium">
                      {musicItem.label}
                    </FormLabel>
                    <div className="flex items-center gap-1">
                      <FormControl>
                        <Input
                          type="number"
                          value={tempValues[musicId] ?? field.value ?? ""}
                          onChange={(e) => {
                            setTempValues((prev) => ({
                              ...prev,
                              [musicId]: e.target.value,
                            }));
                          }}
                          onBlur={() => {
                            const parsedValue = tempValues[musicId]
                              ? Number(tempValues[musicId])
                              : undefined;
                            setValue(
                              `musicPercentages.${musicId}.percentage`,
                              parsedValue
                            );
                            recalculateOthers();
                            setTempValues((prev) => {
                              const updatedTempValues = { ...prev };
                              delete updatedTempValues.someKey;
                              return updatedTempValues;
                            });
                          }}
                          className="flex grow"
                        />
                      </FormControl>
                      <span>%</span>
                    </div>
                  </FormItem>
                )}
              />
            )
          );
        })
      )}

      {/* Conditionally render "Others" only if it exists in selectedMusic */}
      {selectedMusic.includes("others") && musicPercentages.others && (
        <Controller
          key="others"
          control={control}
          name="musicPercentages.others.percentage"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between gap-2">
              <FormLabel className="w-1/3 text-sm font-medium">
                Others
              </FormLabel>
              <div className="flex items-center gap-1">
                <FormControl>
                  <Input
                    type="number"
                    value={tempValues["others"] ?? field.value ?? ""}
                    onChange={(e) => {
                      setTempValues((prev) => ({
                        ...prev,
                        others: e.target.value,
                      }));
                    }}
                    onBlur={() => {
                      const parsedValue = tempValues["others"]
                        ? Number(tempValues["others"])
                        : undefined;
                      setValue(
                        "musicPercentages.others.percentage",
                        parsedValue
                      );
                      recalculateOthers();

                      setTempValues((prev) => {
                        const updatedTempValues = { ...prev };
                        delete updatedTempValues["others"];
                        return updatedTempValues;
                      });
                    }}
                    className="flex grow"
                  />
                </FormControl>
                <span>%</span>
              </div>
            </FormItem>
          )}
        />
      )}

      <FormMessage />
    </FormItem>
  );
};

export default MusicPercentageField;

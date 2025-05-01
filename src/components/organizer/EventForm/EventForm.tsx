import { useEffect } from "react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  DateTimePicker,
  DescriptionField,
  EventFormDialogControls,
  EventTagsField,
  GoogleMapLocation,
  ImageUpload,
  MusicPercentageField,
  MusicSelectionField,
  PriceInputField,
  TitleField,
} from "./components";

import { useEventForm, useSubmitEvent } from "./hooks";

const EventForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  const form = useEventForm();

  const formValues = form.watch(); // 👀 Watch all form values

  const { onSubmit, loading } = useSubmitEvent();

  // Clean up the blob URL when the image changes or the component unmounts
  useEffect(() => {
    if (formValues.image instanceof File) {
      const objectUrl = URL.createObjectURL(formValues.image);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [formValues.image]);

  return (
    <div className={cn("w-full flex flex-col gap-6 m-2", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-center py-2 gap-4"
            >
              {/* Title Field */}
              <TitleField control={form.control} name="title" />

              {/* Location Field */}
              <GoogleMapLocation control={form.control} name="location" />

              {/* Start Time Field */}
              <DateTimePicker
                form={form}
                label="Start time"
                formFieldName="startTime"
              />

              {/* Start Time Field */}
              <DateTimePicker
                form={form}
                label="End time"
                formFieldName="endTime"
              />

              {/* Image Upload Field */}
              <ImageUpload control={form.control} name="image" />

              {/* Description Field */}
              <DescriptionField control={form.control} name="description" />

              {/* Price Field */}
              <PriceInputField control={form.control} name="price" />

              {/* Event Tags Field */}
              <EventTagsField control={form.control} name="eventTags" />

              {/* Music Field */}
              <MusicSelectionField control={form.control} name="music" />

              {/* Music Percentage Field */}
              <MusicPercentageField />

              {/* Additional Link Field */}
              <FormField
                control={form.control}
                name="link"
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
            </form>
          </Form>

          <EventFormDialogControls
            form={form}
            formValues={formValues}
            onSubmit={onSubmit}
            loading={loading}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EventForm;

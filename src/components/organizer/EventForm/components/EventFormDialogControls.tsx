import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import EventCard from "@/components/socials/EventCard";

import { useOrganizerSocialLink } from "@/hooks/organizer";

import type { EventFormValues } from "@/schemas/eventSchema";
import type { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<EventFormValues>;
  formValues: EventFormValues;
  onSubmit: (data: EventFormValues) => void;
  loading: boolean;
}

const EventFormDialogControls = ({
  form,
  formValues,
  onSubmit,
  loading,
}: Props) => {
  const [openDialog, setOpenDialog] = useState(false);

  const { socialLink: organizerSocialLink } = useOrganizerSocialLink();

  return (
    <div className="flex gap-4 justify-between">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={!form.formState.isValid}
          >
            Preview Event
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Preview Event</DialogTitle>
          </DialogHeader>

          <div className="text-center overflow-y-auto max-h-[75vh]">
            <EventCard
              social={{
                id: "preview",
                ...formValues,
                imageUrl:
                  formValues.image instanceof File
                    ? URL.createObjectURL(formValues.image)
                    : "",
                createdAt: new Date(),
                organizerSocialLink: organizerSocialLink ?? "",
              }}
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button
            type="button"
            disabled={loading || !form.formState.isValid}
            onClick={() => setOpenDialog(true)}
          >
            {loading ? "Submitting..." : "Post Event"}
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Event Submission</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to post this event? Please double-check your
            details 💃
          </p>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={form.handleSubmit((data) => {
                setOpenDialog(false);
                onSubmit(data);
              })}
              disabled={loading || !form.formState.isValid}
            >
              Yes, Post It
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventFormDialogControls;

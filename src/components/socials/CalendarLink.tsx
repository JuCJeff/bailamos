import { google } from "calendar-link";

import { Button } from "@/components/ui/button";

import type { Social } from "@/types/eventTypes";

interface CalendarLinkProps {
  event: Social;
}

const CalendarLink = ({ event }: Readonly<CalendarLinkProps>) => {
  // Create the calendar event object
  const calendarEvent = {
    title: event.title,
    description: event.description ? event.description : "",
    start: event.startTime,
    end: event.endTime,
    location: event.location?.address ?? "",
  };

  const googleLink = google(calendarEvent);

  const handleAddToGoogleCalendarClick = () => {
    window.open(googleLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="my-4">
      <Button onClick={handleAddToGoogleCalendarClick}>
        Add to Google Calendar
      </Button>
    </div>
  );
};

export default CalendarLink;

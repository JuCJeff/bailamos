import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import EventTime from "./EventTime";
import GoogleMapLocation from "./GoogleMapLocation";
import MusicPercentages from "./MusicPercentages";
import CalendarLink from "./CalendarLink";
import DetailsLink from "./DetailsLink";

import { formatDateLine, formatTimeLine } from "../utils";

import type { Social } from "@/types/eventTypes";

type EventCardProps = {
  social: Social;
};

const EventCard = ({ social }: EventCardProps) => {
  const musicPercentagesArray = social.musicPercentages
    ? Object.values(social.musicPercentages)
        .filter((music) => music.percentage > 0)
        .sort((a, b) => b.percentage - a.percentage)
    : [];

  const formattedStartTime = `${formatDateLine(
    social.startTime
  )} ${formatTimeLine(social.startTime)}`;

  return (
    <Card className="break-inside-avoid mb-4 mx-2 shadow hover:border-yellow-500 hover:shadow-[0_0_1em_rgba(255,223,0,0.6)] transition-all duration-250 ease-in-out">
      <CardHeader>
        <CardTitle className="text-2xl">{social.title}</CardTitle>
        <CardDescription>{formattedStartTime}</CardDescription>
      </CardHeader>
      <CardContent>
        <CalendarLink event={social} />

        {social.imageUrl && (
          <img
            src={social.imageUrl}
            alt={social.title}
            className="w-full rounded mt-2"
          />
        )}

        <div className="text-center mt-2 whitespace-pre-line">
          <h3 className="text-md text-primary font-bold">Details</h3>
          <p className="text-sm/6">{social.description}</p>
        </div>

        <div>{social.link && <DetailsLink link={social.link} />}</div>

        <div className="flex flex-col justify-center">
          {/* Start Time */}
          <EventTime label="Starts" time={social.startTime} />

          {/* End Time */}
          <EventTime label="Ends" time={social.endTime} />
        </div>

        {social.location && <GoogleMapLocation location={social.location} />}

        {musicPercentagesArray.length > 0 && (
          <MusicPercentages musicList={musicPercentagesArray} />
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs tracking-tight">
          Posted on {formatDateLine(social.createdAt)}{" "}
          {formatTimeLine(social.createdAt)}
        </p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;

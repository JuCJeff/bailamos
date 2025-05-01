import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import EventTags from "./EventTags";
import EventTime from "./EventTime";
import GoogleMapLocation from "./GoogleMapLocation";
import MusicPercentages from "./MusicPercentages";
import CalendarLink from "./CalendarLink";
import DetailsLink from "./DetailsLink";
import FooterContent from "./FooterContent";

import { formatDateLine } from "../utils";

import type { Social } from "@/types/eventTypes";

type EventCardProps = {
  social: Social;
};

const EventCard = ({ social }: EventCardProps) => {
  const musicPercentagesArray = social.musicPercentages
    ? (() => {
        const values = Object.values(social.musicPercentages).filter(
          (music) => music.percentage > 0
        );

        const others = values.find(
          (music) => music.name.toLowerCase() === "others"
        );

        const rest = values
          .filter((music) => music.name.toLowerCase() !== "others")
          .sort((a, b) => b.percentage - a.percentage);

        return others ? [...rest, others] : rest;
      })()
    : [];

  return (
    <Card className="break-inside-avoid mb-4 mx-2 shadow hover:border-yellow-500 hover:shadow-[0_0_1em_rgba(255,223,0,0.6)] transition-all duration-250 ease-in-out">
      <CardHeader>
        <CardTitle className="text-2xl">{social.title}</CardTitle>
        <CardDescription className="flex flex-col">
          <span>{formatDateLine(social.startTime)}</span>
          <span>
            {social.location?.city}, {social.location?.state}
          </span>
        </CardDescription>
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

        <EventTags tags={social.eventTags} />

        <div className="text-center mt-2 whitespace-pre-line">
          <h3 className="text-md font-bold">Details</h3>
          <p className="text-sm/6">{social.description}</p>
        </div>

        <div>{social.link && <DetailsLink link={social.link} />}</div>

        <div className="flex flex-col justify-center">
          {/* Start Time */}
          <EventTime
            label="Time"
            startTime={social.startTime}
            endTime={social.endTime}
          />
        </div>

        <div className="text-center mt-2">
          <h3 className="text-md text-primary font-bold">Cover</h3>
          <p>{social.price ? `$${social.price}` : "Free"}</p>
        </div>

        {social.location && <GoogleMapLocation location={social.location} />}

        {musicPercentagesArray.length > 0 && (
          <MusicPercentages musicList={musicPercentagesArray} />
        )}
      </CardContent>
      <CardFooter>
        <FooterContent
          createdAt={social.createdAt}
          socialLink={social.organizerSocialLink}
          websiteLink={social.websiteLink}
        />
      </CardFooter>
    </Card>
  );
};

export default EventCard;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GoogleMapLocation from "./GoogleMapLocation";
import MusicPercentages from "./MusicPercentages";
import CalendarLink from "./CalendarLink";
import DetailsLink from "./DetailsLink";

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

  return (
    <Card className="break-inside-avoid mb-4 mx-2 shadow hover:border-yellow-500 hover:shadow-[0_0_1em_rgba(255,223,0,0.6)] transition-all duration-250 ease-in-out">
      <CardHeader>
        <CardTitle className="text-2xl">{social.title}</CardTitle>
        <CardDescription>{social.startTime.toLocaleString()}</CardDescription>
      </CardHeader>
      <CardContent>
        {social.imageUrl && (
          <img
            src={social.imageUrl}
            alt={social.title}
            className="w-full rounded mt-2"
          />
        )}

        <div className="text-center my-4 whitespace-pre-line">
          <h3 className="text-md font-bold">Details</h3>
          {social.description}
        </div>

        <CalendarLink event={social} />

        {social.location && <GoogleMapLocation location={social.location} />}
        {musicPercentagesArray.length > 0 && (
          <MusicPercentages musicList={musicPercentagesArray} />
        )}
        {social.link && <DetailsLink link={social.link} />}
      </CardContent>
      <CardFooter>
        <p>Posted at {social.createdAt.toLocaleString()}</p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;

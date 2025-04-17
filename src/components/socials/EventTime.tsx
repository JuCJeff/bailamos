import { formatTimeLine } from "../utils";

interface EventTimeProps {
  label: string;
  startTime: Date;
  endTime: Date;
}

const EventTime = ({ label, startTime, endTime }: EventTimeProps) => {
  return (
    <div className="flex flex-col text-center mt-2 gap-2">
      <div>
        <h3 className="text-md text-primary font-bold">{label}</h3>
        <p className="whitespace-pre-line text-sm">
          {formatTimeLine(startTime)} to{" "}
          {formatTimeLine(endTime)}
        </p>
      </div>
    </div>
  );
};

export default EventTime;

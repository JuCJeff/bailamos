import { formatDateLine, formatTimeLine } from "../utils";

interface EventTimeProps {
  label: string;
  time: Date;
}

const EventTime = ({ label, time }: EventTimeProps) => {
  return (
    <div className="flex flex-col text-center mt-2 gap-2">
      <div>
        <h3 className="text-md text-primary font-bold">{label}</h3>
        <p className="whitespace-pre-line text-sm">
          {formatDateLine(time)}
          {"\n"}
          {formatTimeLine(time)}
        </p>
      </div>
    </div>
  );
};

export default EventTime;

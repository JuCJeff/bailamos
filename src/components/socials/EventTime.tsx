interface EventTimeProps {
  startTime: Date;
  endTime: Date;
}

const EventTime = ({ startTime, endTime }: EventTimeProps) => {
  const formatTime = (date: Date) =>
    date
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      .replace(/^0/, "");

  return (
    <div className="text-center my-4">
      <h3 className="text-md font-bold">Time</h3>
      {startTime.toLocaleDateString()} {formatTime(startTime)} -{" "}
      {endTime.toLocaleDateString()} {formatTime(endTime)}
    </div>
  );
};

export default EventTime;

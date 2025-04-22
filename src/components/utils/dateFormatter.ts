export const formatDateLine = (date: Date) => {
  const weekday = date.toLocaleDateString(undefined, { weekday: "long" });
  const month = date.toLocaleDateString(undefined, { month: "short" });
  const day = date.getDate(); // Just a number
  const year = date.getFullYear();

  return `${weekday}, ${month} ${day}, ${year}`;
};

export const formatTimeLine = (date: Date) =>
  date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

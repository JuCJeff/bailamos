export const formatDateLine = (date: Date) => {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
};

export const formatTimeLine = (date: Date) =>
  date.toLocaleTimeString('en-US', {
    hour: "numeric",
    minute: "2-digit",
  });

export const useDate = (date: Date | undefined) => {
  const normalDate = new Date(date!);
  const day: string = Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    timeZone: "UTC",
  }).format(normalDate);

  const month: string = Intl.DateTimeFormat("ru-RU", {

    month: "long",
  }).format(normalDate);

  const dayOfWeek: string = Intl.DateTimeFormat("ru-RU", {

    weekday: "long",
  }).format(normalDate);

  const time: string = Intl.DateTimeFormat("ru-RU", {

    hour: "numeric",
    minute: "numeric",
  }).format(normalDate);

  return { day, month, dayOfWeek, time };
};

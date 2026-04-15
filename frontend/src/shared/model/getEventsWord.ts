export const getEventsWord = (count: number): string => {
  const n = count % 100;
  if (n >= 11 && n <= 19) return "событий";
  const m = n % 10;
  if (m === 1) return "событие";
  if (m >= 2 && m <= 4) return "события";
  return "событий";
}
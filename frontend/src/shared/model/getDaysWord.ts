export const getDaysWord = (days: number): string => {
  if (days % 10 === 1 && days % 100 !== 11) return "день";
  if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20))
    return "дня";
  return "дней";
}

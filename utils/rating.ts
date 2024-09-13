export function roundRating(total: number): string {
  return total < 1000 ? total.toString() : `${(total / 1000).toString()}K`;
}

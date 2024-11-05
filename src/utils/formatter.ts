export function formatNumber(num: number): string | number {
  const format = Math.floor(num);
  if (isNaN(format)) {
    return num;
  }

  const convert = format?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
  return convert;
}

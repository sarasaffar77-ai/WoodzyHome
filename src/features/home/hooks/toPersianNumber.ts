export function toPersianNumber(value: number | string): string {
  return value.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}
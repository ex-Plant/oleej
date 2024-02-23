export function convertDateToNumericString(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

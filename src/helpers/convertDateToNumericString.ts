export function convertDateToNumericString(isoDateString) {
  // Create a date object from the ISO string
  const dateObj: Date = new Date(isoDateString);

  // Extract the day, month, and year from the date object
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = dateObj.getFullYear();

  // Return the formatted date string
  return `${day}.${month}.${year}`;
}

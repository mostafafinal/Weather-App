const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getFullDate(date) {
  const monthUTC = month[new Date(date).getUTCMonth()];
  const dayUTC = weekday[new Date(date).getUTCDay()];
  const yearUTC = new Date(date).getUTCFullYear();
  const dayNumber = new Date(date).getDate();

  return `${dayUTC}, ${monthUTC}, ${dayNumber}<sub>th</sub>, ${yearUTC}, `;
}

function getFullTime(date) {
  const currDate = new Date();
  const hours = currDate.getHours().toString().padStart(2, 0);
  const minutes = currDate.getMinutes().toString().padStart(2, 0);
  const seconds = currDate.getSeconds().toString().padStart(2, 0);

  if (date) {
    const hours = new Date(date).getHours().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
}

export { getFullDate, getFullTime };
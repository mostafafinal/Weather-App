import fetchAllData from "../../fetchAllData.js";

const data = await fetchAllData();

function getCurrentDayNextHours() {
  const currentHour = new Date(data.current.last_updated).getHours();
  const currentDayHours = data.forecast.forecastday[0].hour;

  const nextHours = currentDayHours.filter(
    (hour) => new Date(hour.time).getHours() > currentHour
  );

  const nextHoursWithDayTitle = nextHours.map((hour) => {
    return { text: "Today", ...hour };
  });

  return nextHoursWithDayTitle;
}

function getRestOfNextHours() {
  const currentHour = new Date(data.current.last_updated).getHours();
  const nextDayHours = data.forecast.forecastday[1].hour;

  const nextHours = nextDayHours.filter(
    (hour) => new Date(hour.time).getHours() < currentHour
  );

  const nextHoursWithDayTitle = nextHours.map((hour) => {
    return { text: "Tomorrow", ...hour };
  });

  return nextHoursWithDayTitle;
}

function getNextHours() {
  const nextHours = [getCurrentDayNextHours(), getRestOfNextHours()];

  return nextHours.flat();
}

export { getNextHours };

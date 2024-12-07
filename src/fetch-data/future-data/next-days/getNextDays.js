import weatherState from "../../weatherState.js";

function getNextDays(data) {
  const currDay = new Date(data.current.last_updated).getDate();
  const nextDays = data.forecast.forecastday.filter(
    (day) => new Date(day.date).getDate() !== currDay
  );

  return nextDays;
}

weatherState.subscribe(getNextDays);

export { getNextDays };

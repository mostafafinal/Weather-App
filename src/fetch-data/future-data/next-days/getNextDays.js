import data from "../../handleWeatherData.js";

function getNextDays() {
  const currDay = new Date(data.current.last_updated).getDate();
  const nextDays = data.forecast.forecastday.filter(
    (day) => new Date(day.date).getDate() !== currDay
  );

  return nextDays;
}

export { getNextDays };

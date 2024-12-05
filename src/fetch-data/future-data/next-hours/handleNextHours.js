import { getNextHours } from "./getNextHours.js";

function NeededDataHandler(hour) {
  const getText = () => hour.text;
  const getTime = () => `${new Date(hour.time).getHours()}:00`;
  const getConditionIcon = () =>
    hour.condition.icon
      .match(/64x64\/(.+?)(?=\.[a-zA-Z]+$)/)[1]
      .split("/")
      .reverse()
      .join("-");
  const getConditionText = () => hour.condition.text;
  const getTempC = () => hour.temp_c;
  const getTempF = () => hour.temp_f;
  const getWindKph = () => hour.wind_kph;
  const getWindMph = () => hour.wind_mph;
  const getChanceOfSnow = () => hour.chance_of_snow;

  return {
    getText,
    getTime,
    getConditionIcon,
    getConditionText,
    getTempC,
    getTempF,
    getWindKph,
    getWindMph,
    getChanceOfSnow,
  };
}

function handleNextHours() {
  const data = getNextHours().map((hour) => NeededDataHandler(hour));

  return data;
}

export { handleNextHours };

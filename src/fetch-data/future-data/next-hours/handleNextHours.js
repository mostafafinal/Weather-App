import { getNextHours } from "./getNextHours.js";

function NeededDataHandler(hour) {
  const getText = () => hour.text;
  const getTime = () => hour.time;
  const getConditionIcon = () => hour.condition.icon.match(/(\d+\.png)/)[0];
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

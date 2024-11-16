import { getNextHours } from "./getNextHours.js";

function NeededDataHandler(hour) {
  return {
    getText() {
      return hour.text;
    },
    getTime() {
      return hour.time;
    },
    getConditionText() {
      return hour.condition.text;
    },
    getTempC() {
      return hour.temp_c;
    },
    getTempF() {
      return hour.temp_f;
    },
    getWindKph() {
      return hour.wind_kph;
    },
    getWindMph() {
      return hour.wind_mph;
    },
    getChanceOfSnow() {
      return hour.chance_of_snow;
    },
  };
}

function handleNextHours() {
  const data = getNextHours().map((hour) => NeededDataHandler(hour));

  return data;
}

export { handleNextHours };

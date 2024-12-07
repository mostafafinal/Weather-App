import { getFullDate } from "../../../helpers/handleDateFormat.js";
import { getNextDays } from "./getNextDays.js";

function NeededDataHandler(day) {
  const getDate = () => getFullDate(day.date);
  const getConditionIcon = () =>
    day.day.condition.icon
      .match(/64x64\/(.+?)(?=\.[a-zA-Z]+$)/)[1]
      .split("/")
      .reverse()
      .join("-");
  const getConditionText = () => day.day.condition.text;
  const getSnowChance = () => day.day.daily_will_it_snow;
  const getMinTempC = () => day.day.mintemp_c;
  const getMinTempF = () => day.day.mintemp_f;
  const getMaxTempC = () => day.day.maxtemp_c;
  const getMaxTempF = () => day.day.maxtemp_f;

  return {
    getDate,
    getConditionIcon,
    getConditionText,
    getSnowChance,
    getMinTempC,
    getMinTempF,
    getMaxTempC,
    getMaxTempF,
  };
}

function handleNextDays(data) {
  return getNextDays(data).map((day) => NeededDataHandler(day));
}

export { handleNextDays };

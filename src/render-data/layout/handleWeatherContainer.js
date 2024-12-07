import { generateCurrCondition } from "../generators/generateCurrCondition.js";
import { generateCurrDetails } from "../generators/generateCurrDetails.js";
import { generateLocation } from "../generators/generateLocation.js";

function handleWeatherContainer(data) {
  generateLocation(data);
  generateCurrCondition(data);
  generateCurrDetails(data);
}

export { handleWeatherContainer };

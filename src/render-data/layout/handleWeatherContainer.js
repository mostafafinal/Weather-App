import { generateCurrCondition } from "../generators/generateCurrCondition";
import { generateCurrDetails } from "../generators/generateCurrDetails";
import { generateLocation } from "../generators/generateLocation";

function handleWeatherContainer() {
  generateLocation();
  generateCurrCondition();
  generateCurrDetails();
}

export { handleWeatherContainer };

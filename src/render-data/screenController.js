import { handleBackground } from "./layout/handleBackground.js";
import { handleWeatherContainer } from "./layout/handleWeatherContainer.js";
import { handleNextHoursContainer } from "./layout/handleNextHoursContainer.js";
import { handleNextDaysContainer } from "./layout/handleNextDaysContainer.js";
import { updateScreen } from "./updateScreen.js";

function screenController(data) {
  updateScreen();

  handleBackground(data);
  handleWeatherContainer(data);
  handleNextHoursContainer(data);
  handleNextDaysContainer(data);
}

export { screenController };

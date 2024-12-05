import { generateNextHours } from "../generators/generateNextHours.js";
import scrollGrab from "../../helpers/scrollGrab.js";

function handleNextHoursContainer() {
  scrollGrab("next-hours");

  generateNextHours();
}

export { handleNextHoursContainer };

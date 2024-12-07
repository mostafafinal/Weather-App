import { generateNextHours } from "../generators/generateNextHours.js";
import scrollGrab from "../../helpers/scrollGrab.js";

function handleNextHoursContainer(data) {
  scrollGrab("next-hours");

  generateNextHours(data);
}

export { handleNextHoursContainer };

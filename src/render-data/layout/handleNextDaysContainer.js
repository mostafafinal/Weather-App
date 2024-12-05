import { generateNextDays } from "../generators/generateNextDays.js";
import scrollGrab from "../../helpers/scrollGrab.js";

function handleNextDaysContainer() {
  scrollGrab("next-days");

  generateNextDays();
}

export { handleNextDaysContainer };

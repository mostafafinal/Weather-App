import { generateNextDays } from "../generators/generateNextDays.js";
import scrollGrab from "../../helpers/scrollGrab.js";

function handleNextDaysContainer(data) {
  scrollGrab("next-days");

  generateNextDays(data);
}

export { handleNextDaysContainer };

import { handleBackgroundData } from "../../fetch-data/current-data/handleBackgroundData.js";
import { createElement } from "../../helpers/createElement.js";

const bgData = handleBackgroundData();

function handleBackground() {
  const body = document.body;
  const bodyBg = createElement("div", {
    class: "day-night-gradient-background",
  });
  const weatherContainerBg = document.querySelector(".bg-image img");
  const imgSrc = `assets/imgs/bg_${bgData.getBgImage()}.jpg`;

  weatherContainerBg.src = imgSrc;

  body.classList.add(`${bgData.getBgMode()}`);

  body.prepend(bodyBg);
}

export { handleBackground };

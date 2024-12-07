import { handleBackgroundData } from "../../fetch-data/current-data/handleBackgroundData.js";

function handleBackground(data) {
  const bgData = handleBackgroundData(data);

  const body = document.body;
  const weatherContainerBg = document.querySelector(".bg-image img");
  const imgSrc = `assets/imgs/bg_${bgData.getBgImage()}.jpg`;

  weatherContainerBg.src = imgSrc;

  body.classList.add(`${bgData.getBgMode()}`);
}

export { handleBackground };

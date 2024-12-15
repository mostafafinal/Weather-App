import { handleBackgroundData } from "../../fetch-data/current-data/handleBackgroundData.js";

function handleBackground(data) {
  const bgData = handleBackgroundData(data);

  const body = document.body;
  const weatherContainerBg = document.querySelector(".bg-image");
  const imgUrl = `url(assets/imgs/bg_${bgData.getBgImage()}.WebP)`;

  weatherContainerBg.style.backgroundImage = imgUrl;
  weatherContainerBg.alt = `${bgData.getBgImage()}`;

  body.classList.remove("day", "night");
  body.classList.add(`${bgData.getBgMode()}`);
}

export { handleBackground };

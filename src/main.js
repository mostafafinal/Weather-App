import "./style.css";

const refreshBtn = document.querySelector(".title-refresh");
refreshBtn.addEventListener("click", rotateBtn);

function rotateBtn() {
  this.style.transform = "rotate(360deg)";
}

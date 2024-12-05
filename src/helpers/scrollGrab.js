export default function scrollGrab(sliderClass) {
  const slider = document.querySelector(`.${sliderClass}`);
  let grab = false;
  let startX;
  let scrollLeft;

  function handleSliderGrab(event) {
    grab = true;

    this.classList.add("grab-scroll");

    startX = event.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
  }

  function handleSliderLeave() {
    grab = false;

    this.classList.remove("grab-scroll");
  }

  function handleSliderRelease() {
    grab = false;

    this.classList.remove("grab-scroll");
  }

  function handleGrabScroll(event) {
    if (!grab) return;

    event.preventDefault();

    const scrollPoint = event.pageX - this.offsetLeft;
    const scrollSpeed = (scrollPoint - startX) * 2;

    this.scrollLeft = scrollLeft - scrollSpeed;
  }

  slider.addEventListener("mousedown", handleSliderGrab);

  slider.addEventListener("mouseleave", handleSliderLeave);

  slider.addEventListener("mouseup", handleSliderRelease);

  slider.addEventListener("mousemove", handleGrabScroll);
}

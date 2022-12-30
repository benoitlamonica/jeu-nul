import { mapping } from "../mapping";
import { interval } from "./interval";
import { handleInterval } from "./intervalHandler";
import { resetScore } from "./score";

const buttonStart = document.querySelector(".start");

Array.prototype.equals = function (arr2) {
  return (
    this.length === arr2.length &&
    this.every((value, index) => value === arr2[index])
  );
};

export function startGame() {
  resetScore();
  interval.current = handleInterval;
}

export function init() {
  buttonStart.style.display = "block";

  mapping.forEach((corner) => {
    corner.element.style.backgroundColor = corner.bgColor;
    corner.element.classList.add("cursor-none");
  });

  buttonStart.addEventListener("click", () => {
    buttonStart.style.display = "none";
    startGame();
  });
}

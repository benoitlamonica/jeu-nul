import { mapping } from "../mapping";
import { cursorIsFreeze } from "../utils";
import { stopInterval } from "./interval";
import { nb } from "./nb";
import { playerChoice } from "./playerChoice";

let index = 0;

export function handleInterval() {
  if (index >= nb.value.length) {
    clearInterval();
    return;
  }

  mapping.forEach((corner) => {
    cursorIsFreeze(corner.element);

    if (corner.order === nb.value[index]) {
      corner.element.style.opacity = '0.3'
      corner.sound.play();
      return;
    }

    corner.element.style.opacity = "";
  });

  index++;
}

mapping.forEach((corner) => {
  corner.element.addEventListener("click", (e) => {
    playerChoice.value = corner.order;
    corner.sound.play();
  });
});

function clearInterval() {
  stopInterval();
  index = 0;
  mapping.forEach((corner) => {
    corner.element.style.opacity = "";
    cursorIsFreeze(corner.element, false);
  });
}

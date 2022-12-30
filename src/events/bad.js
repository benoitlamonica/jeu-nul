import { init } from "../core/game";
import { resetNbValue } from "../core/nb";
import { resetPlayerChoice } from "../core/playerChoice";

const bad = new Event("bad");

export const looseContainer = document.querySelector(".loose-container");

export function hasBad() {
  document.dispatchEvent(bad);
}

document.addEventListener("bad", badListener);

function badListener() {
  looseContainer.style.display = "block";
  resetPlayerChoice();
  resetNbValue();
  init();
}

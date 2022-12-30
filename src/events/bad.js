import { init } from "../core/game";
import { resetNbValue } from "../core/nb";
import { resetPlayerChoice } from "../core/playerChoice";

const bad = new Event("bad");

export function hasBad() {
  document.dispatchEvent(bad);
}

document.addEventListener("bad", badListener);

function badListener() {
  resetPlayerChoice();
  resetNbValue();
  init();
}

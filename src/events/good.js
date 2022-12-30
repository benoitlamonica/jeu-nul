import { interval } from "../core/interval";
import { handleInterval } from "../core/intervalHandler";
import { nb, randomNumber } from "../core/nb";
import { resetPlayerChoice } from "../core/playerChoice";
import { score } from "../core/score";

const good = new Event("good");

export function hasGood() {
  document.dispatchEvent(good);
}

document.addEventListener("good", goodListener);

function goodListener() {
  score.value++;

  let number;

  do {
    number = randomNumber();
  } while (number === nb.value[nb.value.length - 1]);

  nb.value = number;
  resetPlayerChoice();

  interval.current = handleInterval;
}

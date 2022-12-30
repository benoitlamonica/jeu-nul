import { hasBad } from "../events/bad";
import { hasGood } from "../events/good";
import { nb } from "./nb";

export const playerChoice = {};
export const resetPlayerChoice = () => (playerChoiceValue = []);

let playerChoiceValue = [];

const playerChoiceChange = new Event("pcChange");

Object.defineProperty(playerChoice, "value", {
  get() {
    return playerChoiceValue;
  },

  set(value) {
    playerChoiceValue.push(value);
    document.dispatchEvent(playerChoiceChange);
  },
});

document.addEventListener("pcChange", () => {
  if (playerChoice.value.length === nb.value.length) {
    if (playerChoice.value.equals(nb.value)) {
      hasGood();
    } else {
      hasBad();
    }
  }
});

export const score = {};
export const resetScore = () => (score.value = 0);

let scoreValue = 0;

const scoreChange = new Event("scoreChange");
const scoreSpan = document.querySelector(".score");

Object.defineProperty(score, "value", {
  get() {
    return scoreValue;
  },

  set(value) {
    scoreValue = value;
    document.dispatchEvent(scoreChange);
  },
});

document.addEventListener(
  "scoreChange",
  () => {scoreSpan.textContent = score.value}
);

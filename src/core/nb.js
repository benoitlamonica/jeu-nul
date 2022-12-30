export const nb = {};
export const resetNbValue = () => nbValue = [randomNumber()]

let nbValue = [randomNumber()];

const nbChange = new Event('nbChange')

Object.defineProperty(nb, "value", {
  get() {
    return nbValue;
  },

  set(value) {
    nbValue.push(value);
    document.dispatchEvent(nbChange);
  },
});

export function randomNumber() {
  return Math.floor(Math.random() * 4) + 1
}

document.addEventListener('nbChange', () => console.log(nb.value))
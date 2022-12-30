export const interval = {};
export const stopInterval = () => window.clearInterval(interval.current);

let currentInterval = 0;

Object.defineProperty(interval, "current", {
  get() {
    return currentInterval;
  },

  set(value) {
    stopInterval();
    currentInterval = window.setInterval(value, 1000);
  },
});

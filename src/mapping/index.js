const [upLeft, downLeft, upRight, downRight] = document.querySelectorAll(
  ".inside-container > div"
);

export const mapping = [
  {
    order: 1,
    bgColor: "red",
    element: upLeft,
  },
  {
    order: 2,
    bgColor: "blue",
    element: upRight,
  },
  {
    order: 3,
    bgColor: "green",
    element: downRight,
  },
  {
    order: 4,
    bgColor: "gold",
    element: downLeft,
  },
];

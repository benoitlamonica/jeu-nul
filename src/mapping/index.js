const [upLeft, downLeft, upRight, downRight] = document.querySelectorAll(
  ".inside-container > div"
);

export const mapping = [
  {
    order: 1,
    bgColor: "red",
    element: upLeft,
    sound: new Audio('son/son_1.mp3'),
  },
  {
    order: 2,
    bgColor: "blue",
    element: upRight,
    sound: new Audio('son/son_2.mp3')
  },
  {
    order: 3,
    bgColor: "green",
    element: downRight,
    sound: new Audio('son/son_3.mp3')
  },
  {
    order: 4,
    bgColor: "gold",
    element: downLeft,
    sound: new Audio('son/son_4.mp3')
  },
];

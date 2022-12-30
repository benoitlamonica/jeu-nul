export function cursorIsFreeze(element, isFreeze = true) {
  if (isFreeze) {
    element.classList.add("cursor-none");
    return;
  }

  element.classList.remove("cursor-none");
}

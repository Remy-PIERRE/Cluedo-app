import MenuButtonsFactory from "../classes/MenuButton.js";

const menuButtons = getMenuButtons();
console.log(menuButtons.map((button) => button));

/* */
/* */
/* */
function getMenuButtons() {
  const logButtonElement = document.querySelector("#mainScreenLogButton");
  const logButton = new MenuButtonsFactory("log", {
    element: logButtonElement,
  });

  // const newGameButtonElement = document.querySelector(
  //   "#mainScreenNewGameButton"
  // );
  // const newGameButton = new MenuButtonsFactory("newGame", {
  //   element: newGameButton,
  // });

  // const scoreTabsButtonElement = document.querySelector(
  //   "#mainScreenScoreTabsButton"
  // );
  // const scoreTabsButton = new MenuButtonsFactory("scoretabs", {
  //   element: scoreTabsButton,
  // });

  return [logButton];
  // return [logButton, newGameButtonElement, scoreTabsButtonElement];
}

const logInForm = document.querySelector("#logModal__logIn__form");
const createAccomptForm = document.querySelector("#logModal__create__form");
const createAccomptButton = document.querySelector("#logModal__create__button");
const logInButton = document.querySelector("#logModal__logIn__button");

[(createAccomptButton, logInButton)].forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    [logInForm, createAccomptForm].forEach((form) => {
      form.classList.toggle("hidden");
    });
  });
});

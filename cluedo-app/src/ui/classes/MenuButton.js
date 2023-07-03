class MenuButtonsFactory {
  constructor(type, options) {
    switch (type) {
      case "log":
        return new LogMenuButton(options);
      case "newGame":
        return new NewGameMenuButton(options);
      case "scoreTabs":
        return new ScoreTabsMenuButton(options);
      default:
        console.log("Unknow class type.");
        break;
    }
  }
}

export default MenuButtonsFactory;

class MenuButton {
  constructor(options) {
    this.element = options.element;
    this.active = false;
  }

  setElementActive() {
    if (![...this.element.classList].includes("active")) {
      this.element.classList.toggle("active");
    }

    this.active = true;
  }

  setElementNotActive() {
    if ([...this.element.classList].includes("active")) {
      this.element.classList.toggle("active");
    }

    this.active = false;
  }

  checkCurrentUser() {}
}

class LogMenuButton extends MenuButton {
  constructor(options) {
    super(options);

    this.displayUserNameElement = document.querySelector("#displayUserName");
    this.logModalElement = document.querySelector("#logModal");

    this.currentUser = this.checkCurrentUser();
  }

  checkCurrentUser() {
    // const user = localStorage.getItem("userName");
    const user = "Clémentine";
    this.currentUser = user;

    if (this.currentUser) {
      this.displayUserName();
      this.setElementActive();
    } else {
      this.notDisplayUserName();
      this.setElementNotActive();
    }

    return this.currentUser ? true : false;
  }

  displayUserName() {
    if ([...this.displayUserNameElement.classList].includes("hidden")) {
      this.displayUserNameElement.classList.toggle("hidden");
    }

    this.element.innerText = "Déconexion";
    this.displayUserNameElement.innerText = this.currentUser;
  }

  notDisplayUserName() {
    if (![...this.displayUserNameElement.classList].includes("hidden")) {
      this.displayUserNameElement.classList.toggle("hidden");
    }

    this.element.innerText = "Séléction du compte";
    this.displayUserNameElement.inerText = "";
  }

  handleClick() {
    if (this.active) {
      this.handleLogIn();
    }
    if (!this.Active) {
      this.handleLogOut();
    }
  }

  handleLogIn() {}

  handleLogOut() {}
}

/* */
/* */
/* */
class NewGameMenuButton extends MenuButton {
  constructor(options) {
    super(options);
  }
}

/* */
/* */
/* */
class ScoreTabsMenuButton extends MenuButton {
  constructor(options) {
    super(options);
  }
}

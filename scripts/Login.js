"use strict";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class Login {
  constructor() {
    _defineProperty(this, "handleLogin", (event) => {
      // prevent the reload of the page ( form subit button reloads the page)
      event.preventDefault(); // get the values from the inputs

      const email = this.emailInput.value;
      const password = this.passwordInput.value; // Get the users from db (localStorage)

      const users = db.getAllUsers();
      const user = users.find(function (userObj) {
        if (userObj.email === email && userObj.password === password) {
          return true;
        }
      }); // empty the container so that the messages don't add up

      this.messageContainer.innerHTML = "";
      const p = document.createElement("p"); // this.loginButton.setAttribute('button');
      // set the message

      if (!user) {
        p.textContent = "Email or password is incorrect!"; // this.loginButton.classList.remove('shake-horizontal')

        this.loginButton.classList.add("shake-horizontal"); //⚠️⚠️⚠️⚠️！！！！！
      } else {
        p.textContent = `Hello ${user.name}!`;
        p.classList.add("correct-message"); // Redirect to the dashboard page

        this.redirect();
      }

      this.messageContainer.appendChild(p);
    });

    _defineProperty(this, "handleShakeBtn", () => {
      this.loginButton.classList.remove("shake-horizontal");
    });

    _defineProperty(this, "handleSignup", (event) => {
      event.preventDefault();
      setTimeout(function () {
        location.assign("signup.html");
      }, 1000);
    });

    _defineProperty(this, "redirect", () => {
      setTimeout(function () {
        location.assign("index.html");
      }, 1000);
    });

    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector(".message-container");
    this.loginButton = document.querySelector("#login-button");
    this.signupButton = document.querySelector("#signup-button");
  } // handle the login (when user clicks the Login button)
}

const login = new Login();
window.addEventListener("load", function () {
  login.loginButton.addEventListener("click", login.handleLogin);
  login.signupButton.addEventListener("click", login.handleSignup);
  login.loginButton.addEventListener("animationend", login.handleShakeBtn);
});

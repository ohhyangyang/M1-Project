"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Signup {
  constructor() {
    _defineProperty(this, "handleEmailInput", event => {
      const emailInput = event.target;
      const email = emailInput.value; //validation

      validator.validateEmail(email);
      validator.validateUniqueEmail(email); //send error

      this.setErrorMessages();
    });

    _defineProperty(this, "handlePasswordInput", event => {
      const passwordInput = event.target;
      const repeatPasswordInput = this.repeatPasswordInput;
      const password = passwordInput.value;
      const repeatPassword = repeatPasswordInput.value; //validation

      validator.validatePassword(password);
      validator.validateRepeatPassword(password, repeatPassword); //send error

      this.setErrorMessages();
    });

    _defineProperty(this, "handleRepeatPasswordInput", event => {
      const passwordInput = event.target;
      const repeatPasswordInput = this.repeatPasswordInput;
      const password = passwordInput.value;
      const repeatPassword = repeatPasswordInput.value; //validation

      validator.validatePassword(password);
      validator.validateRepeatPassword(password, repeatPassword); //send error

      this.setErrorMessages();
    });

    _defineProperty(this, "setErrorMessages", () => {
      this.nameError.innerHTML = "";
      this.emailError.innerHTML = "";
      this.passwordError.innerHTML = "";
      this.repeatPasswordError.innerHTML = "";
      this.welcomeMessage.innerHTML = ""; //

      const errorsObj = validator.getErrorsList();
      const {
        invalidEmailError,
        passwordError,
        repeatPasswordError,
        welcomeMessage
      } = errorsObj;

      if (invalidEmailError) {
        console.log(this.emailInput.value);
        this.emailError.innerHTML = invalidEmailError;
      } else {
        console.log(this.emailInput.value);
        this.emailError.innerHTML = "";
      }

      if (passwordError) {
        this.passwordError.innerHTML = passwordError;
      } else {
        this.passwordError.innerHTML = "";
      }

      if (repeatPasswordError) {
        this.repeatPasswordError.innerHTML = repeatPasswordError;
      } else {
        this.repeatPasswordError.innerHTML = "";
      }
    });

    _defineProperty(this, "saveData", event => {
      event.preventDefault();
      const name = this.nameInput.value;
      const email = this.emailInput.value;
      const password = this.passwordInput.value;
      const errorsObj = validator.getErrorsList();
      const {
        invalidEmailError,
        passwordError,
        repeatPasswordError
      } = errorsObj; //监听signup，未输入时，也报错

      if (name == "" && email == "" && password == "") {
        this.emailError.innerHTML = invalidEmailError;
        this.passwordError.innerHTML = passwordError;
        this.repeatPasswordError.innerHTML = repeatPasswordError;
      } // console.log(invalidEmailError);
      // console.log(passwordError);
      // console.log(repeatPasswordError);


      if (name !== "" && invalidEmailError == undefined && passwordError == undefined && repeatPasswordError == undefined) {
        const newUser = new User(name, email, password);
        db.saveNewUser(newUser);
        console.log("data saved");
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";
        this.welcomeMessage.innerHTML = `Welcome ${newUser.name}!`;
        this.redirect();
      } else {
        this.buttonInput.classList.add("shake-horizontal");
      }
    });

    _defineProperty(this, "handleShakeBtn", () => {
      this.buttonInput.classList.remove('shake-horizontal');
    });

    _defineProperty(this, "redirect", () => {
      setTimeout(function () {
        location.assign("index.html");
      }, 1000);
    });

    _defineProperty(this, "addListeners", () => {
      this.emailInput.addEventListener("input", this.handleEmailInput);
      this.passwordInput.addEventListener("input", this.handlePasswordInput);
      this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
      this.buttonInput.addEventListener("click", this.saveData);
      this.buttonInput.addEventListener('animationend', this.handleShakeBtn);
    });

    this.nameInput = document.querySelector("#name");
    this.nameError = document.querySelectorAll(".message-container")[0];
    this.emailInput = document.querySelector("#email");
    this.emailError = document.querySelectorAll(".message-container")[1];
    this.passwordInput = document.querySelector("#password");
    this.passwordError = document.querySelectorAll(".message-container")[2];
    this.repeatPasswordInput = document.querySelector("#repeat-password");
    this.repeatPasswordError = document.querySelectorAll(".message-container")[3];
    this.welcomeMessage = document.querySelectorAll(".message-container")[4]; //this.repeatPasswordErrors = document.querySelectorAll('.message-container')

    this.buttonInput = document.querySelector("#signup-button");
  }

}

const signup = new Signup();
window.addEventListener("load", signup.addListeners);
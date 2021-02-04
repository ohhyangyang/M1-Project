"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Validator {
  constructor() {
    _defineProperty(this, "getErrorsList", () => {
      return this.errors;
    });

    _defineProperty(this, "validateEmail", email => {
      if (this.validateEmailSyntax(email)) {
        delete this.errors.invalidEmailError;
      } else {
        this.errors.invalidEmailError = this.invalidEmailError;
      }
    });

    _defineProperty(this, "validateEmailSyntax", email => {
      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      return emailRegEx.test(email);
    });

    _defineProperty(this, "validateUniqueEmail", newEmail => {
      const users = db.getAllUsers();
      let emailUnique = true;
      users.forEach(user => {
        if (user.email === newEmail) {
          emailUnique = false;
        }
      });

      if (emailUnique) {
        delete this.errors.emailExistsError;
      } else {
        this.errors.emailExistsError = this.emailExistsError;
      }
    });

    _defineProperty(this, "validatePassword", password => {
      if (password.length >= 6) {
        delete this.errors.passwordError;
      } else {
        this.errors.passwordError = this.passwordError;
      }
    });

    _defineProperty(this, "validateRepeatPassword", (password, repeatPassword) => {
      if (password == repeatPassword) {
        delete this.errors.repeatPasswordError;
      } else {
        this.errors.repeatPasswordError = this.repeatPasswordError;
      }
    });

    this.nameError = "A name is required", this.invalidEmailError = "Enter a valid email address";
    this.emailExistsError = "The entered email address is already taken.";
    this.passwordError = "Password must be at least 6 characters long";
    this.repeatPasswordError = "Password and reapeat password must match!";
    this.errors = {
      nameError: this.nameError,
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError
    };
  }

}

const validator = new Validator();
"use strict";

class Validator {

  constructor() {
    this.invalidEmailError = "Enter a valid email address";
    this.emailExistsError = "The entered email address is already taken.";
    this.passwordError = "Password must be at least 6 characters long";
    this.repeatPasswordError = "Password and reapeat password must match!";

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  validateEmail = (email) => {
      if(this.validateEmailSyntax(email)){
          delete this.errors.invalidEmailError;
      }else{
          this.errors.invalidEmailError = this.invalidEmailError;
      }
  };

  validateEmailSyntax = (email) =>{
      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

      return emailRegEx.test(email);
  }



}

const validator = new Validator();

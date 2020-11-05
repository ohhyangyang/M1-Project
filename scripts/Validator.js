"use strict";

class Validator {

  constructor() {
      this.nameError = "A name is required",
    this.invalidEmailError = "Enter a valid email address";
    this.emailExistsError = "The entered email address is already taken.";
    this.passwordError = "Password must be at least 6 characters long";
    this.repeatPasswordError = "Password and reapeat password must match!";

    this.errors = {
        nameError:this.nameError,
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  getErrorsList = () => {
    return this.errors;
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

  // validate if email is taken
  validateUniqueEmail = (newEmail) =>{
      const users = db.getAllUsers();

      let emailUnique = true;

      users.forEach((user)=>{
          if(user.email === newEmail){
              emailUnique = false;
          }
      });

      if (emailUnique){
          delete this.errors.emailExistsError;
      }else{
          this.errors.emailExistsError = this.emailExistsError;
      }
  };

  validatePassword = (password) =>{
      if(password.length >= 6){
          delete this.errors.passwordError;
      }else{
          this.errors.passwordError = this.passwordError;
      }
  }

  validateRepeatPassword = (password,repeatPassword) => {
      if(password == repeatPassword){
          delete this.errors.repeatPasswordError;
      }else{
          this.errors.repeatPasswordError = this.repeatPasswordError
      }
  }

  


}

const validator = new Validator();

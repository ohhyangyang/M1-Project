"use strict"

class Signup{
    constructor(){
        this.nameInput = document.querySelector('#name');
        
        this.emailInput =document.querySelector('#email');
        this.emailError = document.querySelector('.message-container:nth-child(1)')

        this.pwdInput = document.querySelector('#password');
        this.pwdError = document.querySelector('.message-container:nth-child(2)')

        this.repeatpwdInput = document.querySelector('#repeat-password');
        this.repeatPwdError = document.querySelector('.message-container:nth-child(3)')

        this.buttonInput = document.querySelector('#signup-button')
    }

    handleEmailInput = (event) =>{
        const emailInput = event.target;
        const email = emailInput.value;

        //validation

        //send error

    }

    handlePwdInput=(event)=>{
        const pwdInput = event.target;
        const repeatPwdInput = this.repeatpwdInput;

        const pwd = pwdInput.value;
        const repeatPwd = repeatPwdInput

        //validation

        //send error
    }

    handleRepeatPwdInput = (event)=>{
        const pwdInput = event.target;
        const repeatPwdInput = this.repeatpwdInput;

        const pwd = pwdInput.value;
        const repeatPwd = repeatPwdInput

        //validation

        //send error
    }

    setErrorMessages = () =>{

    }

    saveData = (event) =>{

    }

    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.pwdInput.addEventListener("input", this.handlePwdInput);
        this.repeatpwdInput.addEventListener("input", this.handleRepeatPwdInput);
        this.buttonInput.addEventListener("click", this.saveData);
      }




}

const signup = new Signup();

window.addEventListener('load', signup.addListeners )
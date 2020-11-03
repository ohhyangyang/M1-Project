"use strict";


class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector(".message-container");
    this.loginButton = document.querySelector("#login-button");
    this.signupButton = document.querySelector("#signup-button");
  }
 

  // handle the login (when user clicks the Login button)
  handleLogin = (event) => {
    // prevent the reload of the page ( form subit button reloads the page)
    event.preventDefault();

    // get the values from the inputs
    const email = this.emailInput.value;       
    const password = this.passwordInput.value; 

    // Get the users from db (localStorage)
    const users = db.getAllUsers();


    const user = users.find( function(userObj) {
      if (userObj.email === email &&  userObj.password === password) {
        return true;
      }
    })

    // empty the container so that the messages don't add up
    this.messageContainer.innerHTML = "";
    const p = document.createElement('p');

    // set the message
    if (!user) {
      p.textContent = "Email or password is incorrect!";
    }
    else {
      
      p.textContent = `Hello ${user.name}!`;
      p.classList.add('correct-message');
      // Redirect to the dashboard page
      this.redirect();
    }

    this.messageContainer.appendChild(p);

  }

  handleSignup =(event) =>{
    event.preventDefault();
    setTimeout( function () {
        location.assign("signup.html")
      }, 1000)
     
  }


  redirect = () => {
    setTimeout( function () {
      location.assign("index.html")
    }, 1000)
  }





}




const login = new Login();

window.addEventListener('load', function () {

  login.loginButton.addEventListener('click', login.handleLogin );
  login.signupButton.addEventListener('click', login.handleSignup );

} )





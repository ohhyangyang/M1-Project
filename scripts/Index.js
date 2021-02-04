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

class Index {
  constructor() {
    _defineProperty(this, "handleBurgerButton", () => {
      this.sliderPage.style.right = "0px"; // this.sliderPage.style.transition =
    });

    _defineProperty(this, "handleCloseButton", () => {
      this.sliderPage.style.right = "100vw";
    });

    _defineProperty(this, "addListeners", () => {
      this.burgerButton.addEventListener("click", this.handleBurgerButton);
      this.closeButton.addEventListener("click", this.handleCloseButton);
      window.addEventListener("scroll", this.changeNavBar);
    });

    _defineProperty(this, "changeNavBar", () => {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        this.navBarWrapper.style.backgroundColor = "white";
        this.navBarWrapper.style.borderBottom = "0.5px gainsboro solid";
        this.navBarWrapper.classList.add("shadow-drop-bottom");
      } else if (
        document.body.scrollTop == 0 ||
        document.documentElement.scrollTop == 0
      ) {
        this.navBarWrapper.style.backgroundColor = "";
        this.navBarWrapper.style.borderBottom = "";
        this.navBarWrapper.classList.remove("shadow-drop-bottom");
      }
    });

    this.burgerButton = document.querySelector(".burger-icon");
    this.closeButton = document.querySelector(".close-icon");
    this.sliderPage = document.querySelector(".slider-wrapper");
    this.typeLinks = document.querySelector(".type-a-container");
    this.navBarWrapper = document.querySelector(".logo-burger-wrapper");
  }
}

const index = new Index();
window.addEventListener("load", index.addListeners);
window.addEventListener("load", index.changeNavBar); //console.log(document.body.scrollTop)
// window.addEventListener('scroll', function(e) {
//   console.log('test')
//   if(document.body.scrollTop>0){
//     console.log(scrollTop)
//   }
// })

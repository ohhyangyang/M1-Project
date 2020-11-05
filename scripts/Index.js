'use strict';

class Index {
  constructor() {
    this.burgerButton = document.querySelector(".burger-icon");
    this.closeButton = document.querySelector(".close-icon")
    this.sliderPage = document.querySelector(".slider-wrapper");
    this.typeLinks = document.querySelector(".type-a-container")
    this.navBarWrapper = document.querySelector(".logo-burger-wrapper");
   
  }

  handleBurgerButton =()=>{
    this.sliderPage.style.right = "0px";
    // this.sliderPage.style.transition =
  }
  handleCloseButton = () =>{
    this.sliderPage.style.right = "100vw";
  }
  addListeners =()=> {
    this.burgerButton.addEventListener("click", this.handleBurgerButton);
    this.closeButton.addEventListener("click", this.handleCloseButton);
    window.addEventListener('scroll',this.changeNavBar)
  }
  changeNavBar =()=> {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      this.navBarWrapper.style.backgroundColor = "white";
      this.navBarWrapper.style.borderBottom = "0.5px gainsboro solid";
      this.navBarWrapper.classList.add('shadow-drop-bottom');
    }else if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0){
      this.navBarWrapper.style.backgroundColor = "";
      this.navBarWrapper.style.borderBottom = "";
      this.navBarWrapper.classList.remove('shadow-drop-bottom');
    }
  }

 
}

const index = new Index();
window.addEventListener('load', index.addListeners )
window.addEventListener('load', index.changeNavBar )

console.log(document.body.scrollTop)

// window.addEventListener('scroll', function(e) {
//   console.log('test')
//   if(document.body.scrollTop>0){
//     console.log(scrollTop)
//   }
// })


  
  






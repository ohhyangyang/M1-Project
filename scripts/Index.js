'use strict';

class Index {
  constructor() {
    this.burgerButton = document.querySelector(".burger-icon");
    this.closeButton = document.querySelector(".close-icon")
    this.sliderPage = document.querySelector(".slider-wrapper");
    this.typeLinks = document.querySelector(".type-a-container")
   
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
    // this.typeAs.addEventListener("")
  }

 
}

const index = new Index();


window.addEventListener("load", index.addListeners);

const typeLinkslip = document.querySelector(".type-a-container a:nth-child(8)");
console.log(typeLinkslip);

  console.log('test')
  console.log(typeLinkslip.href)
  typeLinkslip.href='dashboard.html?product_type=lip_liner'


//API
//需要声明一个get query的函数
// const typeList= document.querySelectorAll('.type-a-container a')
// console.log(test);
// fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lip_liner')
// .then( (response) => {
//   console.log('response', response);

//   // converts the response.body to a JS object
//   return response.json();  
// })
// .then((data) => {
//   console.log('data', data)


  
  

// })





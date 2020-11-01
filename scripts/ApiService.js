const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams)
const myParam = urlParams.get('product_type');
console.log(myParam)

const productsList = document.querySelector('.products-container');
console.log(productsList)
    // Make a request to the server (API) using the URL
    
    // fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`)
    // .then( (response) => {
    //   console.log('response', response);
  
    //   // converts the response.body to a JS object
    //   return response.json();  
    // })
    // .then((data) => {
    //   console.log('data', data)
    //   data.forEach((el)=>{
          
    //       const div = document.createElement('div');
    //       div.innerHTML =
    //       `
    //       <img src="${el.image_link}" />
    //       `

    //       document.body.append(div)
    //   })

      
  
  

  
    // })
    

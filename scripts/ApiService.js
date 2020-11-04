//[from index brands filter]
// const queryFilter = new QueryFilter();
console.log(queryFilter.getQuery());

//get queryStr
const brandQuery = queryFilter.getQuery();

//get productList wrapper
const productsList = document.querySelector(".products-container");
const itemsNumTag = document.querySelector(".items-length");
console.log(productsList);
const  descriptionMaxLength =200;

//let proxyUrl = "https://cors-anywhere.herokuapp.com/";
proxyUrl = "";
//开始fetch
fetch(
  proxyUrl +
    `https://makeup-api.herokuapp.com/api/v1/products.json?${brandQuery}`
)
  .then((response) => {
    console.log("response", response);

    // converts the response.body to a JS object
    return response.json();
  })
  .then((data) => {
    // console.log("data", data);
    const itemsNum = data.length;
    itemsNumTag.innerHTML = `${itemsNum} items`;
    

    data.forEach((el) => {
      console.log(el);
        const div = document.createElement("div");
        div.setAttribute("class", "product-box");
        // console.log(el.description.length> descriptionMaxLength)

        //deal with description
       if(el.description.length <= descriptionMaxLength){
          console.log('noreadmore')
          div.innerHTML = `       
        <img src="${el.image_link}" onerror ="imgError(this)" />
        
        <span class="name">${el.name}</span>
        <span class="tag-list">${el.tag_list}</span>
         
        <p class="description">${el.description}</p>
        
        `;
        }

        else if(el.description.length>descriptionMaxLength){

          console.log('readmore')

          let newStr = el.description.slice(0,descriptionMaxLength);
          let removeStr = el.description.slice(descriptionMaxLength);
          console.log(newStr)
          console.log(removeStr)



          div.innerHTML = `       
          <img class="product-img" src="${el.image_link}" onerror ="imgError(this)" />
          
          <span class="name">${el.name}</span>
          <span class="tag-list">${el.tag_list}</span>
           
          <p class="description">&nbsp&nbsp&nbsp&nbsp${newStr}<a href="" class="showmore">&nbspshow more</a></sp>
          <span class="more-text">${removeStr}<a href="" class="showless">show less</a></span>
          `;
          
          const showMore = div.querySelector('.showmore')
          const moreText = div.querySelector('.more-text')
          const showLess = div.querySelector('.showless')
          showMore.addEventListener('click',(event)=>{
            event.preventDefault()
            showMore.style.display = "none";
            moreText.style.display = "inline";
            showLess.style.display = "inline";
          })
          showLess.addEventListener('click',(event)=>{
            event.preventDefault()
            showMore.style.display = "inline";
            moreText.style.display = "none";
            showLess.style.display = "none";
          })


        }
        productsList.append(div);
      })
    });



//[Select bar type filter]
const typeSelect = document.querySelector("#typeList");
const zeroItemsImg = document.querySelector(".dont-have-container>img");
const zeroItemsP = document.querySelector(".dont-have-container>P");
// add select change listener
typeSelect.addEventListener("change", function (event) {
  productsList.innerHTML = "";
  const tagQuery = `&product_type=${event.target.value}`;

  fetch(
    `https://makeup-api.herokuapp.com/api/v1/products.json?${brandQuery}${tagQuery}`
  )
    //fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`)
    .then((response) => {
      console.log("response", response);

      // converts the response.body to a JS object
      return response.json();
    })
    .then((data) => {
      // console.log("data", data);
      const itemsNum = data.length;
      itemsNumTag.innerHTML = `${itemsNum} items`;

      

      data.forEach((el) => {
        console.log(el);
        const div = document.createElement("div");
        div.setAttribute("class", "product-box");
        console.log(el.description.length> descriptionMaxLength)

        //deal with description

        if(el.description.length <= descriptionMaxLength){
          console.log('noreadmore')
          div.innerHTML = `       
        <img src="${el.image_link}" onerror ="imgError(this)" />
        
        <span class="name">${el.name}</span>
        <span class="tag-list">${el.tag_list}</span>
         
        <p class="description">${el.description}</p>
        
        `;
        }

        else if(el.description.length>descriptionMaxLength){

          console.log('readmore')

          let newStr = el.description.slice(0,descriptionMaxLength);
          let removeStr = el.description.slice(descriptionMaxLength);
          console.log(newStr)
          console.log(removeStr)



          div.innerHTML = `       
          <img class="product-img" src="${el.image_link}" onerror ="imgError(this)" />
          
          <span class="name">${el.name}</span>
          <span class="tag-list">${el.tag_list}</span>
           
          <p class="description">&nbsp&nbsp&nbsp&nbsp${newStr}<a href="" class="showmore">&nbspshow more</a></sp>
          <span class="more-text">${removeStr}<a href="" class="showless">show less</a></span>
          `;
          
          const showMore = div.querySelector('.showmore')
          const moreText = div.querySelector('.more-text')
          const showLess = div.querySelector('.showless')
          showMore.addEventListener('click',(event)=>{
            event.preventDefault()
            showMore.style.display = "none";
            moreText.style.display = "inline";
            showLess.style.display = "inline";
          })
          showLess.addEventListener('click',(event)=>{
            event.preventDefault()
            showMore.style.display = "inline";
            moreText.style.display = "none";
            showLess.style.display = "none";
          })


        }

       

        productsList.append(div);
      });

      //⚠️⚠️⚠️⚠️

      // const imgTags = productsList.querySelectorAll("img");
      // imgTags.forEach((img) => {
      //   img.addEventListener("error", (event) => {
      //     alert("badimg");
      //   });
      // });

      //[if there's no image]
      console.log(productsList);
      // console.log(productsList.innerHTML);
      if (!productsList.innerHTML) {
        console.log("test");
        console.log(zeroItemsP);
        zeroItemsP.innerHTML = "Sorry, we don't have this product";
        zeroItemsImg.setAttribute("src", "./images/donthave.jpg");
      }else{
        zeroItemsP.innerHTML = "";
        zeroItemsImg.setAttribute("src", "");
      }
      

    });

    

  // function imgError(image) {
  //   image.onerror = "";
  //   image.src = "../images/benefit.png";
  //   return true;


  // }
});

// class QueryFilter {
//   constructor() {
//     this.urlParams = new URLSearchParams(window.location.search);
//     this.typeParam = this.urlParams.get("product_type");
//     this.brandParam = this.urlParams.get("brand");
//   }

//   getQuery() {
//     if (this.typeParam) {
//       return `product_type=${this.typeParam}`;
//     } else if (this.urlParams) {
//       return `${this.urlParams}`;
//     }
//   }

//   test() {
//     console.log(this.typeParam);
//     console.log(this.brandParam);
//   }
// }

// const queryFilter = new QueryFilter();
console.log(queryFilter.getQuery());

//get queryStr
const queryStr = queryFilter.getQuery();

//get productList wrapper
const productsList = document.querySelector(".products-container");
console.log(productsList);

//proxyUrl阻止safari的blocker
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
//开始fetch
fetch(proxyUrl + `http://makeup-api.herokuapp.com/api/v1/products.json?${queryStr}`)
  .then((response) => {
    console.log("response", response);

    // converts the response.body to a JS object
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
    data.forEach((el) => {
      if (el.image_link) {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${el.image_link}" />`;

        productsList.append(div);
      }
    });
  });

class QueryFilter {
    constructor() {
      this.urlParams = new URLSearchParams(window.location.search);
      this.typeParam = this.urlParams.get("product_type");
      this.brandParam = this.urlParams.get("brand");
    }
  
    getQuery() {
      if (this.typeParam) {
        return `product_type=${this.typeParam}`;
      } else if (this.urlParams) {
        return `${this.urlParams}`;
      }
    }
  
    test() {
      console.log(this.typeParam);
      console.log(this.brandParam);
    }
  }
  
  const queryFilter = new QueryFilter();
"use strict";
let products = [{
        naem: "Laptop",
        price: 45000,
        isAvaile: true
    }];
// console.log(products)
function cluculatProdce(products) {
    // console.log(products)
    for (let product of products) {
        // console.log(product.naem)
        let { naem, price, isAvaile } = product;
        // console.log(naem,price,isAvaile)
        return `${naem} cose ${price} is avilable:${isAvaile}`;
    }
}
console.log(cluculatProdce(products));

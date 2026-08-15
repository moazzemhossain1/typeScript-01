"use strict";
function add(a, b) {
    return a + b;
}
const result = add(10, 20);
console.log(result);
let array = [2, 43, 5, 64, 7, 8];
function largestNumber(array) {
    // console.log(array)
    let lerge = 0;
    for (let num of array) {
        if (num > lerge)
            // console.log(num)
            lerge = num;
    }
    return lerge;
}
let largers = largestNumber(array);
console.log(largers);
function PrinId(id) {
    console.log(id);
}
console.log(PrinId(10));
console.log("Ablede".toLocaleUpperCase());

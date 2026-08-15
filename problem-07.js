"use strict";
function sumAny(numberse, ...numb) {
    // console.log(numberse);
    // console.log(numb);
    let numl = 0;
    for (let num of numb) {
        numl = numl + num;
        console.log(numl);
    }
}
console.log(sumAny(10, 20, 34));

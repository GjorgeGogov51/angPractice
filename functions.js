"use strict";
//Named function
// c - optional parameter
function add(a, b, c) {
    //return a + b;
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
//Arrow function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
console.log(sub(2, 3, 5));
//Function expression
const mult = function (num1, num2) {
    return num1 * num2;
};
//Rest operator ...
//Questionable implementation, but whatever
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
console.log(add2(2, 3, ...[1, 2, 3, 4, 5]));
//Generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c', 'd', 'e']);
console.log(concatResult);
console.log(concatString);

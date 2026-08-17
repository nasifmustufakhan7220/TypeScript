"use strict";
const numbers = [10, 20, 30, 40];
const dubleNum = numbers.map(num => num * 2);
// console.log(dubleNum);
const filterIng = numbers.filter(num => num > 10);
// console.log(filterIng);
const total = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);
// console.log(total);
const findFirstNumber = numbers.find(num => num > 10);

"use strict";
const printUser = (user) => {
    return `${user.name} is ${user.age} years old`;
};
const productDetails = (product) => {
    return `${product.name} cost ${product.price} and is available: ${product.availability}`;
};
const students = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
// console.log("Total Student:",students.length);
const person = ["Amina", 22];
const userInfo = (user) => {
    return user.email === undefined ? `Name: ${user.name}, Email: Not provided` : `Name: ${user.name}, Email: ${user.email}`;
};
// console.log(userInfo({name: "Amina"}));
const isEven = (number) => {
    if (number % 2 !== 1)
        return true;
    return false;
};
// console.log(isEven(1));
const sumAll = (...nums) => {
    const total = nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return total;
};
// console.log(sumAll(1, 2, 3, 4));
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const num3 = [...nums1, ...nums2];
// console.log(num3);
const posNeg = (num) => {
    const result = num > 0 ? 'Positive' : "Negative";
    return result;
};
// console.log(posNeg(5));
const defaultCase = (name = "Guest") => {
    return name;
};
// console.log(defaultCase());
let value = "hello";
if (typeof value === "string") {
    // console.log(value);
}
const user = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};
const { name: userName, age, email, skills: [first, second, third], active } = user;
const cart = [
    {
        id: 101,
        user: "Nasif",
        products: ["Leptop", "Mobile", "Watch"],
        total: 50000,
        quantity: [1, 1, 2],
        discount: 20,
        tax: 12000,
        shipping_cost: 200,
        final_total: 62200,
    }
];
const login = (user) => {
    if (user.email === "nasifkhan" && user.password === "12345") {
        return true;
    }
    return false;
};
// console.log(login({name:"Nasif", age: 24, email: "nasifkhan", password: "12345"}));
const nums = [1, 2, 3, 4, 5, 6, 7];
const filter = nums.filter(num => num % 2 !== 1);
// console.log(filter);

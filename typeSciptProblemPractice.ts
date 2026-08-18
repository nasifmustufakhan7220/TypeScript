type User = {
    name: string;
    age: number;
    email?:string;
    password?:string;
}

const printUser = (user: User): string =>{
    return `${user.name} is ${user.age} years old`;
}

// const result = printUser({name: "Amina", age: 22});

// console.log(result);

type Product = {
    name: string;
    price: number;
    availability: true;
}

const productDetails = (product: Product): string=>{
    return `${product.name} cost ${product.price} and is available: ${product.availability}`;
}

// const result = productDetails({name:"Laptop", price:45000, availability: true});
// console.log(result);


type Student = string[];

const students: Student = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];

// console.log("Total Student:",students.length);

const person: [string, number] = ["Amina", 22];

// console.log(`${person[0]} is ${person[1]} years old`);


type UserInfo = {
    name: string;
    email?: string;
}


const userInfo = (user: UserInfo): string =>{
    return user.email === undefined ? `Name: ${user.name}, Email: Not provided` : `Name: ${user.name}, Email: ${user.email}`;
}

// console.log(userInfo({name: "Amina"}));



const isEven = (number: number): boolean =>{
    if(number%2!==1) return true;

    return false;
}

// console.log(isEven(1));

const sumAll = (...nums:number[]) =>{
    const total = nums.reduce((acc, curr): number=>{
        return acc + curr;
    },0);
    return total;
}

// console.log(sumAll(1, 2, 3, 4));

const nums1: number[] = [1, 2, 3];
const nums2: number[] = [4, 5, 6];

const num3: number[] = [...nums1, ...nums2];
// console.log(num3);


const posNeg = (num:number): string =>{
    const result = num > 0 ? 'Positive' : "Negative";
    return result;
}

// console.log(posNeg(5));

const defaultCase = (name: string = "Guest")=>{
    return name;
}

// console.log(defaultCase());


let value: unknown = "hello";

if(typeof value === "string"){
    // console.log(value);
} 

type UserDetails = {
    name: string;
    age: number;
    email?: string;
    skills: string[];
    active: boolean;
}

const user: UserDetails = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
}

const {name:userName, age, email, skills:[first, second, third], active} = user;

// console.log(
// `
//  Name: ${userName} 
//  Age: ${age} 
//  Email: ${email} 
//  Skills: ${`${first}, ${second}, ${third}`}
//  Active: ${active}
//  `);



type ShoppingProduct ={
    readonly id: number;
    user: string;
    products: string[];
    total : number;
    quantity: number[];
    discount: number;
    tax: number;
    shipping_cost: number;
    final_total: number;
}

const cart: ShoppingProduct[] =[
    {
        id: 101,
        user: "Nasif",
        products: ["Leptop", "Mobile", "Watch"],
        total : 50000,
        quantity: [1, 1, 2],
        discount: 20,
        tax: 12000,
        shipping_cost: 200,
        final_total: 62200,
    }
];


const login = (user: User): boolean=>{
    if(user.email === "nasifkhan" && user.password === "12345"){
        return true;
    }
    return false;
}

// console.log(login({name:"Nasif", age: 24, email: "nasifkhan", password: "12345"}));


const nums: number[]= [1, 2, 3, 4, 5, 6, 7];

const filter = nums.filter(num=>num%2 !== 1);
// console.log(filter);
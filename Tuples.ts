//Position Matters
// the order matters.
let student: [string, number] = ["Nasif", 24];
// student[0]-----> string
// student[1]-----> number


// Tuples vs Normal Array

// Normala Array
let data: (string | number)[] = ["Nasif", 24];
// it means that every element can be either a string or a number.


// so

data.push("Rahim"); // ✅
data.push(30);      // ✅


// Tuple

let data1: [string, number] = ["Nasif", 24];

// this means position 0 must be a string and position 1 must be a number.

//so 

data1[0] = "Rahim"; //✅
data1[1] = 30; //✅


//Tuples Can Have More Than Two Elements

let user: [string, number, boolean] = ["Nasif", 24, true]

//This means
// position 0 → string
// position 1 → number
// position 2 → boolean

//Optional Tuple Elements
// it means position 0 → required string
// position 1 → optional number
let user1: [string, number?] = ["Nasif"];


//Tuple with readonly

// Now we can not modify its elements.
let user2: readonly [string, number] = ["Nasif", 24];

// user2[0] = "Rahim"; ❌


//Tuple Destructuring 

const student1: [string, number] = ["Nasif", 24];

const [, age] = student;

console.log(age);

// TypeScript knows:

// name → string
// age  → number

// Because it knowas the tuple structure. This is one reason tuples work nicely with destructuring.


//When should you use tuples?


// Use them when position has a specific meaning.

// For example:

let rgb: [number, number, number] = [255, 100, 50];

// Each position represents a specific value:

// [red, green, blue]

// Another example:

let response: [number, string] = [200, "Success"];

// Here:

// position 0 → status code
// position 1 → message

// That's a reasonable use of a tuple.
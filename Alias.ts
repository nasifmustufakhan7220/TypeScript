//Basic syntax:

// type TypeName = type;

//imagine you need the same object structure in many places.

//That's where Type Aliases come in.

type Student = {
    name: string;
    age: number;
}

// So, now, 
//Now Student represents this type:

// {
//     name: string;
//     age: number;
// }


const student : Student = {
    name: "Nasif",
    age: 24
}

//Why do we need Type Aliases?

//imagine you need the same object structure for multiple object.
//That's where Type Aliases come in.


const student2 : Student = {
    name: "Nasif",
    age: 24
}

const student3 : Student = {
    name: "Rahim",
    age: 24
}


//Type Alias Doesn't Create a New Runtime Object

//This is important.

//When you write:

// type Student = {
//     name: string;
//     age: number;
// };

// TypeScript does not create a JavaScript object called Student.

// It is only a type-level definition.

// After TypeScript compiles your code to JavaScript, the type alias disappears.

// So:

// type Student = {
//     name: string;
//     age: number;
// };

// is basically telling TypeScript:

// "Whenever I say Student, use this type definition."




// Type Alias for Arrays

// You can also create an alias for an array:

type Scores = number[];


const scores: Scores = [80, 90, 100];

// Now:

// Scores
//   ↓
// number[]

// So:

scores.push(95);    // ✅
// scores.push("95");  // ❌




// Type Alias for Tuples

// You can also create a tuple alias:

type StudentInfo = [string, number];


const student4: StudentInfo = ["Nasif", 24];

// So:

// StudentInfo
    //  ↓
// [string, number]

// This is useful when a tuple structure is reused.


// 7. Optional Properties with Type Aliases

// Everything you learned about object types works inside a type alias.

// For example:


type Student1 = {
    name: string;
    age: number;
    email?: string
}

// Now:

//Valid
const student5 : Student1 ={
     name: "Nasif",
     age: 24,
     email: "nasifkhan"
}

// also valid for using ? with email

const student6 : Student1 ={
    name : "Rahim",
    age: 22
}

// 8. readonly with Type Aliases

// You can also use readonly:

type Student2 = {
    readonly id: number;
    name: string;
    age: number;
}

// Then :

const student7: Student2 ={
    id: 101,
    name: "Karim",
    age: 20
}

// This is valid

student7.name = "nasif"; //✅

//But this is invalid


// student7.id = 102 ❌ for readonly



// 9. Type Alias + Array of Objects

type Student3 = {
    name: string;
    age?: number;
}

// const students: Student4[] =[
//     {
//         name: "Nasif",
//         age: 24
//     },
//     {
//         name: "Rahim",
//         age: 22
//     }
// ] 

const products : Student3[] = [
    {
        name: "Computer"
    },
    {
        name: "Leptop",
        age: 4
    }
]

// 10. Type Alias + Functions

type Puipils = {
    name: string;
    age: number;
}

const introductionStudent = (student: Puipils): string =>{
    return `My name is ${student.name}`;
}

console.log(introductionStudent({name: "Nasif", age: 24}));
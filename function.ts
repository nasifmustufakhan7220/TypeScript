// const add(a:number, b:number)=> : number{

// }

function add(a: number, b: number): number{
    return a + b;
}

const result: number = add(5, 5);
// console.log(result);


function introduce(name: string, age: number, isStudent?: boolean): void{
    console.log(name,age, isStudent);
}

// introduce("Nasif", 24, true);


function getFullName(firstName: string, lastName: string): string{
    return firstName + " " + lastName;
}

const nameDetails: string = getFullName("Nasif", "Khan");
// console.log(nameDetails);


function isAdult(age: number): boolean{
    return age>=18;
}

// console.log(isAdult(20));
// console.log(isAdult(15));


function greet(name: string = "Guest"): string{
    return `Hello ${name}`;
}

// console.log(greet("Nasif"));

function numArr(numbers?: number[]): void{
    if(numbers){
        for(const num of numbers){
            console.log(num);
        }
    }
}

// numArr([10,20,30,40]);
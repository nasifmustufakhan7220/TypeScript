const numbers: number[] = [10,20,30,40];

const dubleNum: number[] = numbers.map(num=> num * 2);
// console.log(dubleNum);

const filterIng: number[] = numbers.filter(num => num >  10);

// console.log(filterIng);

const total = numbers.reduce((acc: number, curr: number): number=>{
    return acc+curr;
}, 0);

// console.log(total);

const findFirstNumber: number | undefined = numbers.find(num=>num>100);

// console.log(findFirstNumber);



numbers.forEach(num=>num > 10 && console.log(num));
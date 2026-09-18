// arrow functions 
// now  i will differentiate between the normal functiona nd the arrow function
//normal function
function addition1(h: number, v: number): number {
    return h + v;
}

console.log(addition1(10, 20));

//Arrow functions
const addition = (h: number, v: number): number => {
    return h + v;
};

console.log(addition(10, 20));
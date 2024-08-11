//Named function
// c - optional parameter
function add(a: number, b: number, c?: number) : number
{
    //return a + b;
    return c ? a + b + c : a + b;
}
console.log(add(2,3));

//Arrow function
const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;
console.log(sub(2,3));
console.log(sub(2,3,5));

//Function expression
const mult = function(num1: number, num2: number) : number
{
    return num1 * num2;
}

//Rest operator ...
//Questionable implementation, but whatever
function add2(num1: number, num2: number, ...num3: number[]): number
{
    return num1 + num2 + num3.reduce((a,b) => a + b);
}
console.log(add2(2,3,...[1,2,3,4,5]));


//Generic function
function getItems<T>(items: T[]): T[]
{
    return new Array<T>().concat(items)
}
let concatResult = getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(['a', 'b', 'c', 'd', 'e']);
console.log(concatResult);
console.log(concatString);
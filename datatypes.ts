let lname : string;
lname = "Santosh";
let newName =  lname.toUpperCase();
console.log("New Name: " + newName);

let age : number
age = 25;
age = 25.5;
let stringResult = parseInt("25");
console.log("Result: " + stringResult.toString());

let isValid : boolean = false;
console.log(isValid);

let empList : string[];
empList = ["Santosh", "Santosh1", "Santosh2"];
let numList : Array<number>;
numList = [1,2,3,4,5];
let arrayResults = numList.filter((num) => num > 2);
console.log(arrayResults);
let foundNumber = numList.find((num) => num === 4);
let foundEmployee = empList.find((emp) => emp === "Santosh")
console.log(foundNumber);
console.log(foundEmployee);
let sum = numList.reduce((acc,num) => acc + num);
console.log(sum);

const enum Color 
{
    Red, Green, Blue
}
let c : Color = Color.Blue;

//Tuples
let swapNumbs : [number, number];
function swapNumbers(num1: number, num2: number) : [number, number] 
{
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs[0]);

let department : any;
//Don't use it
department = "IT";
department = 10;

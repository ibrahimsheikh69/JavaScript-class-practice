// program 1

let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

console.log(`First number: ${num1}`)
console.log(`Second number: ${num2}`)

num1 = Number(num1)
num2 = Number(num2)


let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let rem = num1 % num2;

console.log(`Addition: ${add}`)
console.log(`Subtraction: ${sub}`)
console.log(`Multiplication: ${mul}`)
console.log(`Division: ${div}`)
console.log(`Remainder: ${rem}`)

// program 2

let savedEmail = "student@gmail.com";
let savedPassword = "12345";

let userEmail = prompt("Enter your email");
let userPassword = prompt("Enter your password");


console.log(userEmail == savedEmail && userPassword == savedPassword);

// program 3

let count = 0;
console.log(++count); 
console.log(++count); 
console.log(--count);









// program 1

let str = "hello";
console.log(`value: ${str} type: ${typeof(str)}`);
let bool = true ;
console.log(`value: ${bool} type: ${typeof(bool)}`);
let nu = 69;
console.log(`value: ${nu} type: ${typeof(nu)}`);
let x ;
console.log(`value: ${x} type:${typeof(x)}`);
let y =null;
console.log(`value: ${y} type:${typeof(y)}`);
let big = 1234567890123456789012345678901234567890n;
console.log(`value: ${big} type:${typeof(big)}`);

// Program 2
 
let num1 = 69;
let num2 = num1; 
num2 = 67;
console.log(num1);
console.log(num2);
console.log("the variable changed cuz it was re-assigned")

// Program 3

let n = prompt("hey tell me your name");
let a = prompt("hey tell me your age");
let i = prompt("hey tell me if you are a student true or false");
let k = prompt("hey tell me your favourite number");
let f = prompt("hey tell me your nickname");

a = Number(a);
i = Boolean(i);
k= Number(k);



console.log(`Name: ${n} - ${typeof(n)}`);
console.log(`Age: ${a} - ${typeof(a)}`);
console.log(`Isstudent: ${i} - ${typeof(i)}`);
console.log(`Favourite Number: ${k} - ${typeof(k)}`);
console.log(`Nickname: ${f} - ${typeof(f)}`);









 

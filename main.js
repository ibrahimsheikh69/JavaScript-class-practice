// practice task 1


for (let i = 1; i <= 20; i++ ) {
    console.log(i);
};

for (let i = 2; i <= 20; i+=2) {
    console.log(i);
};

for(let i = 10; i > 0; i-- ) {
    console.log(i);
};

for(let i = 7; i <= 70; i+= 7){
    console.log(i)
};

let sum_of_50 = 0;
for(let i = 1; i <= 50; i++){
    sum_of_50 += i;
    console.log(sum_of_50);
};

let js = "Javascript";
for (let i = 0; i < js.length; i++) {
    console.log(js.charAt(i));
};

// let emoji = prompt("give us some emoji or symbol");
// let number_of_times = prompt("give us a number");
    
// for (let i = 0; i < Number(number_of_times); i++) {
//     console.log(emoji);
// }

let rows = 5;
let pyramid = '';
for (let i = 0; i <= rows; i++) {
    pyramid += ' '.repeat(rows - i);
    pyramid += '*'.repeat(2 * i + 1);
    pyramid += '\n';
};
console.log(pyramid);

for (let i = 10; i >= 1; i--) {
    console.log(i)
};
console.log("🚀 Launch!");


// practice task 2


let task1 = 1;
while (task1 <= 10) {
    console.log(task1);
    task1++;
};

let task2 = 1;
while (task2 <= 15) {
    console.log(task2);
    task2 += 2;
}

let task3 = 5;
while (task3 <= 50){
    console.log(task3)
    task3 += 5;
};

// let pass = "1234";
// let user_input = "";
// while (user_input != pass) {
//     user_input = prompt("enter your pin");
// }
// console.log("ACCESS GRANTED");

// let secret_num = "7";
// let user_guess = "";
// while (user_guess != secret_num) {
//     user_guess = prompt("guess the secret number")
// };

// let alarm_word = "stop";
// let user_word = "";
// while (user_word != alarm_word) {
//     alert("wake up");
//     user_word = prompt("Type stop to turn off the alarm");
// };


// practice task 3


let task11 = 1;
do {
    console.log(task11);
    task11++;
}while (task11 <= 5);

// let usernum = "";
// let task22 = 0;
// usernum = prompt("give us a number");
// do {
//     console.log("hello");
//     task22++;
// } while (task22 <= Number(usernum));

// let userinput2 = "";
// let task33 = "yes";
// do {
// userinput2 = prompt(
//   "Welcome to JS ATM 💳\n\n" +
//   "1️⃣ Check Balance\n" +
//   "2️⃣ Withdraw\n" +
//   "3️⃣ Deposit\n" +
//   "4️⃣ Exit\n\n" +
//   "Enter your choice (yes) if you want menu again:"
// );} while (task33 === userinput2);

// let userinput3 = "";
// let imp_word = "yes";
// do {
// alert("1. Pizza\n" +
//     "2. Burger\n" +
//     "3. Drinks\n");
//     userinput3 = prompt("Type stop to turn off the alarm");
// } while (userinput3 === imp_word);

// let userinput4 = "";
// let candy_word = "more";
// do {
// alert("You ate a candy");
//     userinput4 = prompt("Do you want more?(yes/more/no");
// } while (userinput4 === candy_word || userinput4 === "yes");


let userinput5 = "";
let magic_word = "Khulja sim sim";
do {
    userinput5 = prompt("Say the magic word");
    if (userinput5 === magic_word) {
        alert("the door is open")
    } else {
        alert("Wrong word, try again!")
    }
} while (userinput5 !== magic_word);


















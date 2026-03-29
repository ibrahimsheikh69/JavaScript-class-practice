let balance = 1000;
const pin = "1234";
let input;
let choice 

while (input != pin) {
    input = prompt(`Enter Your Pin`);

if (input == pin) {
choice = prompt(
  "Welcome to JS ATM 💳\n\n" +
  "1️⃣ Check Balance\n" +
  "2️⃣ Withdraw\n" +
  "3️⃣ Deposit\n" +
  "4️⃣ Exit\n\n" +
  "Enter your choice (1-4):"
);
}else {
    alert("Please enter Correct Pin")
}

let withdraw
let Deposit

if (choice == 1) {
    alert(`your balance is: $${balance}`)
    
} else if (choice == 2) {
withdraw = prompt(`How much do you wiah to withdraw`)
 if (withdraw <= balance)
 {
    prompt(`you have withdrawn ${withdraw}`)
    balance = balance - Number(withdraw)
    console.log(balance)
 }
} else if (choice == 3){
    Deposit = prompt("HOw much do you want to deposit")
    balance = balance + Number(Deposit)
    console.log(balance)
    
}else if (choice == 4){
    alert("thanks for using our services")
}
}






























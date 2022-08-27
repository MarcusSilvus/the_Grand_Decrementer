
let welcomeEL = document.getElementById("welcome-el");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

let myName = "Mark";
let greeting = "Welcome back";
let myGreeting = greeting + ", " + myName + "!";

welcomeEL.textContent = myGreeting;

function increment () {
  count++;
  countEl.textContent = count;
}

function decrement () {
  count--;
  countEl.textContent = count;
}

function save () {
 let currentNum = count + " - ";
  saveEl.textContent += currentNum;
  count = 0; 
  countEl.textContent = count;

}  





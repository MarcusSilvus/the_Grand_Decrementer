
let welcomeEL = document.getElementById("welcome-el");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

let myName = "Mark";
let greeting = "Welcome back";
let myGreeting = greeting + ", " + myName + "!";

welcomeEL.innerText = myGreeting;

function increment () {
  count++;
  countEl.innerText = count;
}

function decrement () {
  count--;
  countEl.innerText = count;
}

function save () {
 let currentNum = count + " -";
  saveEl.innerText += " " + currentNum; 
}  





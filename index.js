
let countEl = document.getElementById("count-el");

let count = 0;

function increment () {
  count++;
  countEl.innerText = count;
}

function decrement () {
  count--;
  countEl.innerText = count;
}
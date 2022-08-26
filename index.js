

// create a variable for the count and set it to 0
// listen for button clicks
// if addPerson is pushed count++ and if removePerson is pushed count-- 
// the counter on the page is incremented or decremented

let count = 0;

function increment () {
  count++;
  document.getElementById("count").innerText = count;
}

function decrement () {
  count--;
  document.getElementById("count").innerText = count;
}


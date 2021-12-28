// init counter value and var
var value = 0;

// documents for the buttons
var addButton = document.getElementById("add");
var subButton = document.getElementById("sub");

// document for counter
var counter = document.getElementById("counter");

// add event listeners
addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);


// functions for adding and sub
function add() {
  value = value + 1;
  counter.innerHTML = value;
}

function sub() {
  value = value - 1;
  counter.innerHTML = value;
}

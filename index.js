// DOM Manipulation

// Create a div element
// Add a class to the div element
// Add text to the div element
// Append the div element to the body

// Create a new div element
// const newDiv = document.createElement("div");

// Add a class to the div element
// newDiv.classList.add("container");

// Add text to the div element
// newDiv.innerHTML = "Hello, World!";

// Append the div element to the body
// document.body.appendChild(newDiv);

function sayHello() {
  document.getElementById("container").innerHTML = "Sain baina uu!";
}

function clear() {
  document.getElementById("container").innerHTML = "";
}

const sayHelloButton = document.getElementById("greeting-button");

sayHelloButton.style.backgroundColor = "blue";
sayHelloButton.style.color = "white";
sayHelloButton.style.border = "none";
sayHelloButton.style.padding = "10px 20px";
sayHelloButton.style.borderRadius = "5px";

sayHelloButton.addEventListener("click", sayHello);
sayHelloButton.addEventListener("mouseover", function () {
  sayHelloButton.style.backgroundColor = "green";
  sayHelloButton.style.cursor = "pointer";
});

sayHelloButton.addEventListener("mouseout", function () {
  sayHelloButton.style.backgroundColor = "blue";
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);

const input = document.getElementById("mock");
input.addEventListener("input", function (event) {
  document.getElementById("mock-text").innerHTML = event.target.value;
});

let fullname = "";
let email = "";

const name_input = document.getElementById("name");
name_input.addEventListener("input", function (event) {
  fullname = event.target.value;
});
const email_input = document.getElementById("name");
email_input.addEventListener("input", function (event) {
  email = event.target.value;
});
function validateForm(event) {
  event.preventDefault();

  if (fullname.length === 0 || email.length === 0) {
    alert("Please fill out all fields!");
  } else {
    console.log({
      fullname,
      email,
    });
  }
}

const contactFormButton = document.getElementById("contact-form-button");
contactFormButton.addEventListener("click", validateForm);
let num1 = 0;
let num2 = 0;

const number1_input = document.getElementById("number1");
number1_input.addEventListener("input", function (event) {
  num1 = parseFloat(event.target.value);
});
const number2_input = document.getElementById("number2");
number2_input.addEventListener("input", function (event) {
  num2 = parseFloat(event.target.value);
});

function add2number() {
  const sum = num1 + num2;
  document.getElementById("sum").innerHTML = sum;
  console.log(sum);
}

const sumbtn = document.getElementById("sumbtn");
sumbtn.addEventListener("click", add2number);

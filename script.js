"use strict"

const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const clear = () =>{
  results.innerText = "";
  input.value = "";
}

const telephoneNumberValidator = () =>{
  const numInput = input.value;
  const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if(numInput === ""){
    alert("Please provide a phone number");
    return;
  }
  
  if(numInput.match(regEx)){
    results.innerText = "Valid US number: " + numInput;
  } else {
    results.innerText = "Invalid US number: " + numInput;
  }
}

clearButton.addEventListener("click", clear);
checkButton.addEventListener("click", telephoneNumberValidator);
import Calculator from "./calculator/calculator.js";

const calculator = new Calculator();

var inputProfessional = prompt(
  "We can offer you a Designer, a Developer or a Manager"
);
var inputHours = prompt("How many hours do you need him/her?");

calculator.showTotal(inputProfessional, inputHours);

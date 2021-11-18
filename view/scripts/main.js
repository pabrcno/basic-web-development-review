import Calculator from "./calculator/calculator.js";

const calculator = new Calculator();

var selectedProfessional = "";
var hours = 0;

var professionalsSelect = document.getElementById("professionals");
var hoursInput = document.getElementById("hours");
var calculateButton = document.getElementById("calculate");

professionalsSelect.addEventListener("change", () => {
  selectedProfessional = professionalsSelect.value;
});

hoursInput.addEventListener("change", () => {
  hours = parseInt(hoursInput.value);
});

calculateButton.addEventListener("click", () => {
  var results = calculator.calculate(selectedProfessional, hours);
  //save results to local storage
  localStorage.setItem("results", JSON.stringify(results));

  //get results from local storage
  results = JSON.parse(localStorage.getItem("results"));
  //show results
  var result = `<h2>Resume</h2>
  <p>Professional: ${selectedProfessional}</p>
  <p>Hours: ${hours}</p>
  <p>Hourly Rate: ${results.hourlyRate}$</p>
  <p>Total: ${results.total}$</p>
  <p>Total with Tax: ${results.totalWithTax}$</p>
  <p>Total with Discount: ${results.totalWithDiscount}$</p>`;

  document.getElementById("result").innerHTML = result;
});

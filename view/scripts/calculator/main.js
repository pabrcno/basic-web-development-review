import Calculator from "./calculator.js";

const calculator = new Calculator();

let selectedProfessional = "";
let hours = 0;

let professionalsSelect = document.getElementById("professionals");
let hoursInput = document.getElementById("hours");
let calculateButton = document.getElementById("calculate");

professionalsSelect.addEventListener("change", () => {
  selectedProfessional = professionalsSelect.value;
});

hoursInput.addEventListener("change", () => {
  hours = parseInt(hoursInput.value);
});

calculateButton.addEventListener("click", () => {
  let results = calculator.calculate(selectedProfessional, hours);
  //save results to local storage
  localStorage.setItem("results", JSON.stringify(results));

  //get results from local storage
  results = JSON.parse(localStorage.getItem("results"));
  //show results
  let result = `<h2>Resume</h2>
  <p>Professional: ${selectedProfessional}</p>
  <p>Hours: ${hours}</p>
  <p>Hourly Rate: ${results.hourlyRate}$</p>
  <p>Total: ${results.total}$</p>
  <p>Total with Tax: ${results.totalWithTax}$</p>
  <p>Total with Discount: ${results.totalWithDiscount}$</p>`;

  document.getElementById("result").innerHTML = result;
});

// contact form using jquery

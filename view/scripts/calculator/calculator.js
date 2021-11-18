class Calculator {
  //Receives a number and returns the number plus 12% of the number
  addTax = (number) => {
    return number * 1.12;
  };
  // Receives a number and returns the number minus 30% of the number
  applyBigDiscount = (number) => {
    return number * 0.7;
  };
  // Receives a number and returns the number minus 10% of the number
  applySmallDiscount = (number) => {
    return number * 0.9;
  };

  // Receives an number array and returns the sum of the number number plus 10% of the number
  addTaxToTotal = (numberArray) => {
    var sum = numberArray.reduce(function (a, b) {
      a + b;
    });
    return sum * 1.1;
  };

  //Determine hourly rate
  getHourlyRate = (professional) => {
    switch (professional.toLowerCase()) {
      case "designer":
        return 20;
      case "developer":
        return 30;
      case "manager":
        return 40;
      default:
        return 0;
    }
  };
  //determine discount
  getDiscount = (totalWithTax, hours) => {
    var totalWithDiscount;
    if (hours > 100) {
      totalWithDiscount = this.applyBigDiscount(totalWithTax);
    } else if (50 < hours < 100) {
      totalWithDiscount = this.applySmallDiscount(totalWithTax);
    } else {
      totalWithDiscount = totalWithTax;
    }
    return totalWithDiscount;
  };

  //calculation logic
  calculate = (professional, hours) => {
    hours = parseInt(hours);
    var hourlyRate = this.getHourlyRate(professional);
    var total = hourlyRate * hours;
    var totalWithTax = this.addTax(total);
    var totalWithDiscount = this.getDiscount(totalWithTax, hours);

    return {
      hours: hours,
      hourlyRate: hourlyRate,
      total: Math.round(total),
      totalWithTax: Math.round(totalWithTax),
      totalWithDiscount: Math.round(totalWithDiscount),
    };
  };
  showTotal = (professional, hours) => {
    alert(`You will have to pay ${this.calculate(professional, hours)}$`);
  };
}
export default Calculator;

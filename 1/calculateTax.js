/*
==>> HINTS <<==
1. Income (number): the annual income of an individual in USD.
2. Age (number): the age of the individual.
3. Dependents (number): the number of dependents the individual has.

==>> INVALID RETURN <<==
1. If income is less than 0 or not a number, return "Invalid income".
2. If age is less than 0 or not a number, return "Invalid age".
3. If dependents is less than 0 or not a number, return "Invalid dependents".

==>> RULES <<==
a)	If the age is less than 18, return "Not eligible for tax".
b)	If the age is 65 or older, the individual gets a 20% tax discount.
c)	If the income is less than or equal to $10,000, the tax is 10% of the income.
d)	If the income is between $10,001 and $50,000, the tax is 20% of the income.
e)	If the income is more than $50,000, the tax is 30% of the income.
f)	For each dependent, the individual gets a $500 tax deduction.
g)	The minimum tax is $0 (no negative tax).
*/

function calculateTax(income, age, dependents) {
  if (income < 0 || typeof income !== "number") {
    return "Invalid income";
  }

  if (age < 0 || typeof age !== "number") {
    return "Invalid age";
  }

  if (dependents < 0 || typeof dependents !== "number") {
    return "Invalid dependents";
  }

  if (age < 18) {
    return "Not eligible for tax";
  }

  let tax;
  if (income <= 10000) {
    tax = 0.1 * income;
  } else if (income <= 50000) {
    tax = 0.2 * income;
  } else {
    tax = 0.3 * income;
  }

  if (age >= 65) {
    tax *= 0.8;
  }

  let taxDeduction = dependents * 500;
  tax -= taxDeduction;

  if (tax < 0) {
    tax = 0;
  }

  return tax;
}

// ==>> EXAMPLE <<==
console.log(calculateTax(-1000, 30, 2)); // Output: Invalid income
console.log(calculateTax(20000, -1, 0)); // Output: Invalid age
console.log(calculateTax(20000, 35, -5)); // Output: Invalid dependents
console.log(calculateTax(20000, 17, 0)); // Output: Not eligible for tax)
console.log(calculateTax(60000, 30, 2)); // Output: tax $17,000)
console.log(calculateTax(5000, 70, 0)); // Output: tax $400

## Explain code calculateTax

1. Function `calculateTax` accepts three parameters: `income`, `age`, and `dependents`.

2. Check that the `income` value is valid, that is the value is bigger than 0 and is of type number. If invalid, `return "Invalid income"`.

```js
if (income < 0 || typeof income !== "number") {
  return "Invalid income";
}
```

3. Check that the `age` value is valid, that is the value is bigger than 0 and is of type number. If invalid, `return "Invalid age"`.

```js
if (age < 0 || typeof age !== "number") {
  return "Invalid age";
}
```

4. Check that the `dependents` value is valid, that is the value is bigger than 0 and is of type number. If invalid, `return "Invalid dependents"`.

```js
if (dependents < 0 || typeof dependents !== "number") {
  return "Invalid dependents";
}
```

5. Checks tax eligibility based on age, if age is less than 18 years, `return "Not eligible for tax"`.

```js
if (age < 18) {
  return "Not eligible for tax";
}
```

6. Determines tax rates based on income with if-else.

```js
if (income <= 10000) {
  tax = 0.1 * income;
} else if (income <= 50000) {
  tax = 0.2 * income;
} else {
  tax = 0.3 * income;
}
```

7. Calculate initial taxes by multiplying income by the appropriate tax rate.

8. Tax discount 20% if the individual age is 65 or older.

```js
if (age >= 65) {
  tax *= 0.8;
}
```

9. Reduces taxes based on the number of dependents, the individual gets a $500 tax deduction.

```js
let taxDeduction = dependents * 500;
tax -= taxDeduction;
```

10. The minimum tax is $0 (no negative tax).

```js
if (tax < 0) {
  tax = 0;
}
```

11. Return the amount of tax an individual must pay.

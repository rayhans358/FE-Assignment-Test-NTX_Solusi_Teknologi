## Explain code calculateShippingCost

1. Function `calculateShippingCost` accepts three parameters: `destination`, `weight`, and `priority`.

2. Check that the `destination` value is valid, that is the value is "domestic" or "international". If invalid, `return "Invalid destination"`.

```js
if (destination !== "domestic" && destination !== "international") {
  return "Invalid destination";
}
```

3. Check that the `weight` value is valid, that is the value is is less than or equal to 0. If invalid, `return "Invalid weight"`.

```js
if (weight <= 0) {
  return "Invalid weight";
}
```

4. Check that the `priority` value is valid, that is the value is "standard", "express" or "priority". If invalid, `return "Invalid priority"`.

```js
if (
  priority !== "standard" &&
  priority !== "express" &&
  priority !== "priority"
) {
  return "Invalid priority";
}
```

5. Determine the basic cost per kg based on destination and priority with if-else.

```js
if (destination === "domestic") {
  if (priority === "standard") {
    baseCostPerKg = 5;
  } else if (priority === "express") {
    baseCostPerKg = 10;
  } else if (priority === "priority") {
    baseCostPerKg = 20;
  }
} else if (destination === "international") {
  if (priority === "standard") {
    baseCostPerKg = 15;
  } else if (priority === "express") {
    baseCostPerKg = 25;
  } else if (priority === "priority") {
    baseCostPerKg = 50;
  }
}
```

6. Add additional fees if the weight exceeds the specified limit (for "domestic" 10 kg with an additional fee of $10 and for "international" 5 kg with an additional fee of $50).

```js
For domestic
if (weight > 10) {
    additionalCost = 10;
  }

For international
if (weight > 5) {
  additionalCost = 50;
}
```

7. Calculate total shipping costs by multiplying the basic cost per kg by the weight and adding additional costs.

```js
totalCost = weight * baseCostPerKg + additionalCost;
```

8. Return the total shipping cost.

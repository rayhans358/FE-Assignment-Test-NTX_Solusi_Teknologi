/*
==>> HINTS <<==
1. Destination (string): the shipping destination, which can be "domestic" or "international".
2. Weight (number): the weight of the package in kilograms (kg).
3. Priority (string): the shipping priority, which can be "standard", "express", or "priority".

==>> INVALID RETURN <<==
1. If destination is not "domestic" or "international", return "Invalid destination".
2. If weight is less than or equal to 0, return "Invalid weight".
3. If priority is not one of "standard", "express", or "priority", return "Invalid priority".

==>> RULES <<==
Rules to determine the shipping cost based on destination:
For "domestic" destination:
a)	If priority is "standard", the base cost is $5 per kg.
b)	If priority is "express", the base cost is $10 per kg.
c)	If priority is "priority", the base cost is $20 per kg.
d)	If weight is more than 10 kg, add an additional cost of $10.
For "international" destination:
a)	If priority is "standard", the base cost is $15 per kg.
b)	If priority is "express", the base cost is $25 per kg.
c)	If priority is "priority", the base cost is $50 per kg.
d)	If weight is more than 5 kg, add an additional cost of $50.
*/

function calculateShippingCost(destination, weight, priority) {
  if (destination !== "domestic" && destination !== "international") {
    return "Invalid destination";
  }

  if (weight <= 0) {
    return "Invalid weight";
  }

  if (
    priority !== "standard" &&
    priority !== "express" &&
    priority !== "priority"
  ) {
    return "Invalid priority";
  }

  let baseCostPerKg;
  let additionalCost = 0;
  let totalCost = 0;

  if (destination === "domestic") {
    if (priority === "standard") {
      baseCostPerKg = 5;
    } else if (priority === "express") {
      baseCostPerKg = 10;
    } else if (priority === "priority") {
      baseCostPerKg = 20;
    }

    if (weight > 10) {
      additionalCost = 10;
    }
  } else if (destination === "international") {
    if (priority === "standard") {
      baseCostPerKg = 15;
    } else if (priority === "express") {
      baseCostPerKg = 25;
    } else if (priority === "priority") {
      baseCostPerKg = 50;
    }

    if (weight > 5) {
      additionalCost = 50;
    }
  }

  totalCost = weight * baseCostPerKg + additionalCost;
  return totalCost;
}

// ==>> EXAMPLE <<==
console.log(calculateShippingCost("local", 8, "standard")); // Output: Invalid destination
console.log(calculateShippingCost("domestic", 0, "express")); // Output: Invalid weight
console.log(calculateShippingCost("domestic", 5, "sameday")); // Output: Invalid priority
console.log(calculateShippingCost("domestic", 5, "standard")); // Output: $25
console.log(calculateShippingCost("domestic", 11, "express")); // Output: $120
console.log(calculateShippingCost("international", 5, "express")); // Output: $125
console.log(calculateShippingCost("international", 6, "priority")); // Output: $350

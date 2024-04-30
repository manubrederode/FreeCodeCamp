function checkCashRegister(price, cash, cid) {
    //Defining currency units and their values ​​in cents
    const currencyUnitValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    //Calculating the change due
    let changeDue = (cash - price);
    let changeArray = [];

    //Calculate the total amount of money in the cash register (cid)
    let totalCid = 0;
    for (let element of cid) {
        totalCid += element[1];
  }
    totalCid = Math.round(totalCid * 100) / 100;

    // Function to round number to two decimal places
  const roundToTwoDecimalPlaces = num => Math.round(num * 100) / 100;

  // Check if there is insufficient funds in the register
  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if the cash in the register is exactly equal to the change due
  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Loop through each currency unit in descending order
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyUnit = cid[i][0];
    let currencyAmount = cid[i][1];
    const currencyValue = currencyUnitValues[currencyUnit];
    let amountToReturn = 0;

    // While the currency unit is less than or equal to the change due
    while (currencyValue <= changeDue && currencyAmount > 0) {
      changeDue = roundToTwoDecimalPlaces(changeDue - currencyValue);
      currencyAmount = roundToTwoDecimalPlaces(currencyAmount - currencyValue);
      amountToReturn = roundToTwoDecimalPlaces(amountToReturn + currencyValue);
    }

    // If any amount of this currency unit was used, add it to the change array
    if (amountToReturn > 0) {
      changeArray.push([currencyUnit, amountToReturn]);
    }
  }

  // Check if it was possible to return exact change
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Return the change
  return { status: "OPEN", change: changeArray };
}

//Testing
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
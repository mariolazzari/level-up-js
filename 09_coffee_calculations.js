function coffeeDate(coffeeArr) {
  const sum = coffeeArr.reduce(
    (totalCoffees, numCoffees) => (totalCoffees += numCoffees)
  );

  return `The total bill is $${sum * 1.25}`;
}

console.log(coffeeDate([2, 5, 7, 1, 4]));

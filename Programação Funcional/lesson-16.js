const squareList = arr => {
  // Altere apenas o código abaixo desta linha
  const integers = arr.filter(number => Number.isInteger(number) && number > 0);
  const squaredIntegers = integers.map(number => number * number);
  return squaredIntegers;
  // Altere apenas o código acima desta linha
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
function sumPrimes(num) {
  return Array(num).fill(null)
    .map((element, index) => ++index)
    .filter(number => {
      const dividers = Array(number).fill(null)
      .map((element, index) => ++index);
      const divisibles = dividers.filter(divider => number % divider === 0);
      const isPrime = divisibles.length === 2;
      return isPrime;
    }).reduce((accumulator, number) => accumulator + number, 0);
}

sumPrimes(10);
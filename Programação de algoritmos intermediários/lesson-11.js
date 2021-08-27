function fibonacci (number) {
  if (!number) {
    return 'O parâmetro |number| deve ser maior ou igual a 1.'
  }
  const array = [];
  let count = number;
  while (count) {
    const lastNumber = array[array.length - 1];
    const penultimateNumber = array[array.length - 2];
    const sum = lastNumber + penultimateNumber;
    if (sum > number) {
      return array;
    }
    !sum ? array.push(1) : array.push(sum);
    count--;
  }
  return array;
}

function sumOddNumbers(array, limit) {
  return array.filter(element => element % 2 !== 0 && element <= limit)
    .reduce((accumulator, number) => accumulator + number);
}

function sumFibs(number) {
  return sumOddNumbers(fibonacci(number), number);
}

sumFibs(4);
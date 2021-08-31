function addTogether() {
  const args = Array.prototype.slice.call(arguments, 0);
  const [firstNumber, secondNumber] = args;
  if (args.length === 2) {
    const isNumber = typeof firstNumber === 'number'
      && typeof secondNumber === 'number' ;
    if (!isNumber) {
      return undefined;
    }
    return firstNumber + secondNumber;
  }
  const isNumber = typeof firstNumber === 'number';
  if (!isNumber) {
    return undefined;
  }
  const previousNumber = args[0];
  return function (number) {
    const isNumber = typeof number === 'number';
    if (!isNumber) {
      return undefined;
    }
    return previousNumber + number;
  };
}

addTogether(2,3);
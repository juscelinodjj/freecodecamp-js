function largestOfFour(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let number = false;
    const currentArray = arr[i];
    for (let j = 0; j < currentArray.length; j++) {
      const currentNumber = currentArray[j];
      if (!number) {
        number = currentNumber;
        continue;
      }
      const isBigger = currentNumber > number;
      if (isBigger) {
        number = currentNumber;
      }
    }
    result.push(number);
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
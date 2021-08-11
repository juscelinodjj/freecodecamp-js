function findElement(arr, func) {
  let result = undefined;
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    const result = func(number);
    if (result) {
      return number;
    }
  }
  return result;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
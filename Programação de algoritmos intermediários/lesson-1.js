function sumAll(arr) {
  const numberSmaller = arr[0] > arr[1] ? arr[1] : arr[0];
  const numberLarger = numberSmaller === arr[0] ? arr[1] : arr[0];
  const interval = [];
  let i = numberSmaller;
  while (i <= numberLarger) {
    interval.push(i);
    i++;
  }
  const sum = interval.reduce((accumulator, number) => {
    return accumulator += number;
  }, 0);
  return sum;
}

sumAll([1, 4]);
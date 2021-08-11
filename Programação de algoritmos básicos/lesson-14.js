function getIndexToIns(arr, num) {
  if (!arr.length) {
    return 0;
  }
  arr.sort((a, b) => a - b);
  let i = 0;
  for (; i < arr.length; i++) {
    const number = arr[i];
    if (number >= num) {
      return i;
    }
  }
  return i;
}

getIndexToIns([40, 60], 50);
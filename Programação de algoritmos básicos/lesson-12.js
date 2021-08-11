function frankenSplice(arr1, arr2, n) {
  const array = [...arr2];
  array.splice(n, 0, ...arr1);
  return array;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
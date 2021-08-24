function diffArray(arr1, arr2) {
  const firstFilter = arr1.filter(element => !arr2.includes(element));
  const secondFilter = arr2.filter(element => !arr1.includes(element));
  const diff = [...firstFilter, ...secondFilter];
  return diff;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
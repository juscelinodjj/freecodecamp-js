function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments, 1);
  const newArray = arr.filter(element => !args.includes(element));
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
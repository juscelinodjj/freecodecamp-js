function dropElements(arr, func) {
  const array = [...arr];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const pass = func(element);
    if (!pass) {
      array.shift();
      continue;
    }
    return array;
  }
  return array;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
function chunkArrayInGroups(arr, size) {
  const result = [];
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
    if (array.length === size) {
      result.push(array);
      array = [];
      continue;
    }
  }
  if (array[0]) {
    result.push(array);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
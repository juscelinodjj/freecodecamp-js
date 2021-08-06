function filteredArray(arr, elem) {
  let newArr = [];
  // Altere apenas o código abaixo desta linha
  for (let i = 0; i < arr.length; i++) {
    const currentArr = arr[i];
    const invalid = currentArr.indexOf(elem) > -1 ? true : false;
    if (!invalid) {
      newArr.push(currentArr);
    }
  }
  // Altere apenas o código acima desta linha
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
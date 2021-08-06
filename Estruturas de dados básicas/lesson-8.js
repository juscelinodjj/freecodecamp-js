function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Altere apenas o código abaixo desta linha
    newArr.push([...arr]);
    // Altere apenas o código acima desta linha
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
function nextInLine(arr, item) {
  // Altere apenas o código abaixo desta linha
  arr.push(item);
  var removedFromArr = arr.shift();
  return removedFromArr;
  // Altere apenas o código acima desta linha


}

// Configuração
var testArr = [1,2,3,4,5];

// Exibir o código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
function mixedNumbers(arr) {
  // Altere apenas o código abaixo desta linha
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  // Altere apenas o código acima desta linha
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
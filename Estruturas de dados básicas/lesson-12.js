let myNestedArray = [
  // Altere apenas o código abaixo desta linha
  ['3 níveis',['deep']],
  ['4 níveis',[['deeper']]],
  ['5 níveis',[[['deepest']]]]
  // Altere apenas o código acima desta linha
];

const deep = myNestedArray[0][1][0];
const deeper = myNestedArray[1][1][0][0];
const deepest = myNestedArray[2][1][0][0][0];
console.log(deepest);
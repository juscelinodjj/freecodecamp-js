const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Altere apenas o código abaixo desta linha
  const [, , ...arr] = list; // Altere esta linha
  // Altere apenas o código acima desta linha
  return arr;
}
const arr = removeFirstTwo(source);
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Altere apenas o código abaixo desta linha
  return [...arr].sort((a, b) => a - b);
  // Altere apenas o código acima desta linha
}
nonMutatingSort(globalArray);
function alphabeticalOrder(arr) {
  // Altere apenas o código abaixo desta linha
  return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
  // Altere apenas o código acima desta linha
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
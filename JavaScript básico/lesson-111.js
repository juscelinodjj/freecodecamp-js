// Altere apenas o código abaixo desta linha
function countdown (n) {
  if (n < 1) {
    return [];
  }
  var countArray = countdown(n - 1);
  countArray.unshift(n);
  return countArray;
}
// Altere apenas o código acima desta linha
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Altere apenas o código abaixo desta linha
  return foods[scannedItem];
  // Altere apenas o código acima desta linha
}

console.log(checkInventory("apples"));
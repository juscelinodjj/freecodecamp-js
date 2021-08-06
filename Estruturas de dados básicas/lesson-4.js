function popShift(arr) {
  let popped = arr.pop(); // Altere esta linha
  let shifted = arr.shift(); // Altere esta linha
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
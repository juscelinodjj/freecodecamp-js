function sliceArray(anim, beginSlice, endSlice) {
  // Altere apenas o código abaixo desta linha
  [].slice(); // hehe
  const newArray = [];
  for (let i = beginSlice; i < endSlice; i++) {
    const element = anim[i];
    console.log(element);
    newArray.push(element);
  }
  return newArray;
  // Altere apenas o código acima desta linha
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
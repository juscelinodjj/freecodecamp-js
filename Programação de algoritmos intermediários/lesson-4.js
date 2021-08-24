function whatIsInAName(collection, source) {
  var arr = [];
  // Altere apenas o código abaixo desta linha
  const arraySource = Object.entries(source)
    .map(element => element[0] + element[1]);
  for (let i = 0; i < collection.length; i++) {
    const object = collection[i];
    const arrayObject = Object.entries(object)
      .map(element => element[0] + element[1]);
    const includes = arraySource.every(element => {
      return arrayObject.includes(element);
    });
    if (includes) {
      arr.push(object);
    }
  }
  // Altere apenas o código acima desta linha
  return arr;
}

whatIsInAName([
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
], { last: "Capulet" });
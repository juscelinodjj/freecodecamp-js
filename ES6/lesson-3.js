function printManyTimes(str) {

  // Altere apenas o código abaixo desta linha

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Altere apenas o código acima desta linha

}
printManyTimes("freeCodeCamp");
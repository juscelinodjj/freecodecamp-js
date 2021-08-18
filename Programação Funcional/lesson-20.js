function sentensify(str) {
  // Altere apenas o código abaixo desta linha
  const array = str.split(/[\s,\.,-]/);
  const newString = array.join(' ');
  return newString;
  // Altere apenas o código acima desta linha
}
sentensify("May-the-force-be-with-you");
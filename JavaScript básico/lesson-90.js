function checkObj(obj, checkProp) {
  // Altere apenas o código abaixo desta linha
  var hasProperty = obj.hasOwnProperty(checkProp);
  if (hasProperty) {
    return obj[checkProp];
  }
  return "Not Found";
  // Altere apenas o código acima desta linha
}
function Dog(name) {
  this.name = name;
}

// Altere apenas o código abaixo desta linha
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false;
}
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Altere apenas o código abaixo desta linha

let duck = Object.create(Animal.prototype); // Altere esta linha
let beagle = Object.create(Animal.prototype); // Altere esta linha
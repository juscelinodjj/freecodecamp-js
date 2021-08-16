function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Altere apenas o código abaixo desta linha

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
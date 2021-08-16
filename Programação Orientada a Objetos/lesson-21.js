function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Altere apenas o código abaixo desta linha
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
// Altere apenas o código acima desta linha

let beagle = new Dog();
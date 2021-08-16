function Dog(name) {
  this.name = name;
}

// Altere apenas o código abaixo desta linha
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
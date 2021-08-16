function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Altere apenas o código abaixo desta linha
  numLegs: 4,
  eat: function() {
    console.log("yumi yumi yumi");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // retorna verdadeiro

// Corrija o código abaixo para que ele seja avaliado como verdadeiro
Object.prototype.isPrototypeOf(Dog.prototype);
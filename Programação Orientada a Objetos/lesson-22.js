function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Altere apenas o código abaixo desta linha
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};
// Altere apenas o código acima desta linha

let penguin = new Penguin();
console.log(penguin.fly());
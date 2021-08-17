// A variável global
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Altere apenas o código abaixo desta linha
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const result = callback(element);
    newArray.push(result);
  }
  // Altere apenas o código acima desta linha
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
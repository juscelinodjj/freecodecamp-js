// A variável global
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Altere apenas o código abaixo desta linha
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    const result = callback(element);
    if (result) {
      newArray.push(element);
    }
  }
  // Altere apenas o código acima desta linha
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
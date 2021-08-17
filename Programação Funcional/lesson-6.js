// A variável global
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Altere o código abaixo desta linha
function add (list, bookName) {
  const newList = [...list];
  newList.push(bookName);
  return newList;
  // Altere o código acima desta linha
}

// Altere o código abaixo desta linha
function remove (list, bookName) {
  const newList = [...list].filter(item => item !== bookName);
  return newList;
}
// Altere o código acima desta linha

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
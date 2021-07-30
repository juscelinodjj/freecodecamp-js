let myString = "Eleanor Roosevelt";
let myRegex = /^[A-Z]{1}[a-z]{5,}\s(.+)?Roosevelt$/; // Altere esta linha
let result = myRegex.test(myString); // Altere esta linha
// Depois de passar no experimento do desafio com myString e ver como o agrupamento funciona
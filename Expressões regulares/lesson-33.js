let hello = "   Hello, World!  ";
let wsRegex = /\s{2,3}/g; // Altere esta linha
let result = hello.replace(wsRegex, ""); // Altere esta linha
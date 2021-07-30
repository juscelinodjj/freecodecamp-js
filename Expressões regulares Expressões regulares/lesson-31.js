let repeatNum = "42 42 42";
let reRegex = /^(\d{1,})\s\1\s\1$/; // Altere esta linha
let result = reRegex.test(repeatNum);
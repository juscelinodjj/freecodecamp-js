let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // Altere esta linha
let result = pwRegex.test(sampleWord);
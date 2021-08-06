let str = "one two three";
let fixRegex = /(\w{3})\s(\w{3})\s(\w{5})/; // Altere esta linha
let replaceText = "$3 $2 $1"; // Altere esta linha
let result = str.replace(fixRegex, replaceText);
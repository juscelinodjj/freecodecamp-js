// Configuração
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
// Altere apenas o código abaixo desta linha
var result = "";
for (var i = 0; i < contacts.length; i++) {
  var contact = contacts[i];
  var hasName = contact["firstName"] === name;
  var hasProp = contact.hasOwnProperty(prop);
  if (hasName && hasProp) {
    result = contact[prop];
    break;
  }
  if (hasName && !hasProp) {
    result = "No such property";
    break;
  }
  result = "No such contact";
}
return result;
// Altere apenas o código acima desta linha
}
lookUpProfile("Akira", "likes");
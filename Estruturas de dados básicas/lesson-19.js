let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Altere apenas o código abaixo desta linha
  return Object.keys(obj);
  // Altere apenas o código acima desta linha
}

console.log(getArrayOfUsers(users));
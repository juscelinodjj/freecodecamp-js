let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Altere apenas o código abaixo desta linha
  const names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
  for (let i = 0; i < names.length; i++) {
    const exist = userObj.hasOwnProperty(names[i]);
    if (!exist) {
      return false;
    }
  }
  return true;
  // Altere apenas o código acima desta linha
}

console.log(isEveryoneHere(users));
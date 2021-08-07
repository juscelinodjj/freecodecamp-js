let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Altere apenas o código abaixo desta linha
  userObj['data']['friends'].push(friend);
  return userObj['data']['friends'];
  // Altere apenas o código acima desta linha
}

console.log(addFriend(user, 'Pete'));
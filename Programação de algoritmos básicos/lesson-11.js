function titleCase(str) {
  const result = [];
  const array = str.split(' ');
  for (let i = 0; i < array.length; i++) {
    const currentWord = array[i].toLowerCase();
    const word = currentWord[0].toUpperCase()
      + currentWord.substr(1, currentWord.length);
    result.push(word);
  }
  return result.join(' ');
}

titleCase("I'm a little tea pot");
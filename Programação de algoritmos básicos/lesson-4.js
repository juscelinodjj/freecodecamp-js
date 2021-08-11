function findLongestWordLength(str) {
  const array = str.split(' ');
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    const isBigger = word.length > length;
    if (isBigger) {
      length = word.length;
    }
  }
  return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
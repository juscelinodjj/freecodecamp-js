function getIntervalNumeric (start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

function fearNotLetter(str) {
  const alphabet = ['a','b','c','d','e','f','g','h','i', 'j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'];
  const indexes = str.split('').map(letter => {
    for (let i = 0; i < alphabet.length; i++) {
      const match = letter === alphabet[i];
      if (match) {
        return i;
      }
    }
  });
  const start = indexes[0];
  const end = indexes[indexes.length - 1];
  const interval = getIntervalNumeric(start, end);
  const diff = interval.filter(element => !indexes.includes(element));
  return diff.length ? alphabet[diff[0]] : undefined;
}

fearNotLetter('abce');
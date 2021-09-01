const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z'];

function rot13(str) {
  const rotation = 13;
  const newString = str.split('').reduce((string, char) => {
    const position = alphabet.findIndex(element => element === char);
    if (position < 0) {
      return string += char;
    }
    const newPosition = position + rotation >= alphabet.length
      ? position + 13 - alphabet.length : position + 13;
    const newChar = alphabet[newPosition];
    return string += newChar;
  }, '');
  return newString;
}

rot13("SERR PBQR PNZC");
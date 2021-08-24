function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const startWithVowels = vowels.includes(str[0]);
  if (startWithVowels) {
    return str + 'way';
  }
  let array = str.split('');
  let loop = array.length;
  while (loop) {
    const startWithVowels = vowels.includes(array[0]);
    if (startWithVowels) {
      return `${array.join('')}ay`;
    }
    const tempArray = array.slice(1, array.length).concat(array.slice(0, 1));
    array = [...tempArray];
    loop--;
  }
  return `${str}ay`;
}

translatePigLatin('consonant');
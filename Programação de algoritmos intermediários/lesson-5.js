function spinalCase(str) {
  const replaceUpperCase = str.split('')
    .map(character => {
      return character === character.toUpperCase()
        ? ' ' + character.toLowerCase()
        : character;
    }).join('');
  const replaceUnderscore = replaceUpperCase.replaceAll('_', ' ');
  const replaceSpace = replaceUnderscore
    .trim()
    .replace(/\s{1,}/g, '-');
  const replaceDoubleHyphen = replaceSpace.replaceAll('--', '-');
  return replaceDoubleHyphen;
}

spinalCase('This Is Spinal Tap');

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
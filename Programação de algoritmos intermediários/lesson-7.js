function fixCase(stringA, stringB) {
  const isUpperCase = stringA[0] === stringA[0].toUpperCase();
  if (isUpperCase) {
    return stringB[0].toUpperCase() + stringB.slice(1);
  }
  return stringB.toLowerCase();
}

function myReplace(str, before, after) {
  return str.replace(before, fixCase(before, after));
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
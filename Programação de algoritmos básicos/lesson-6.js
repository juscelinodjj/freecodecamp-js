function confirmEnding(str, target) {
  const endString = str.substr(-target.length);
  const result = target === endString;
  return result;
}

confirmEnding("Bastian", "n");
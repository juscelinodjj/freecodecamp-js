function mutation(arr) {
  const firstString = arr[0].toLowerCase();
  const secondString = arr[1].toLowerCase();
  let result = false;
  for (let i = 0; i < secondString.length; i++) {
    const letter = secondString[i];
    result = firstString.includes(letter);
    if (!result) {
      return false;
    }
  }
  return result;
}

mutation(["hello", "hey"]);
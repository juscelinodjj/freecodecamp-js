function repeatStringNumTimes(str, num) {
  let string = '';
  if (num < 1) {
    return string;
  }
  while (num) {
    string += str;
    num--;
  }
  return string;
}

repeatStringNumTimes("abc", 3);
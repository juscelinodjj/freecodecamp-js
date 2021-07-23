function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum];
  }
  var array = rangeOfNumbers((startNum + 1), endNum);
  array.unshift(startNum);
  return array;
}
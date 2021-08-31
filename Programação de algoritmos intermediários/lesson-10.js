function uniteUnique(arr) {
  const array = Array.prototype.slice.call(arguments, 0);
  return array.reduce((accumulator, array) => {
    for (let number of array) {
      if (!accumulator.includes(number)) {
        accumulator.push(number);
      }
    }
    return accumulator
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
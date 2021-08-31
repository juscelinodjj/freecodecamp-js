function smallestCommons(arr) {
  const numberSmaller = arr[0] > arr[1] ? arr[1] : arr[0];
  const numberLarger = numberSmaller === arr[0] ? arr[1] : arr[0];
  const interval = [];
  let i = numberSmaller;
  while (i <= numberLarger) {
    interval.push(i);
    i++;
  }
  let count = 1;
  while (true) {
    const match = interval.map(number => count % number)
      .every(number => number === 0);
    if (match) {
      return count;
    }
    count++;
  }
}

// smallestCommons([1,5]);
console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([1, 13])); // 360360
console.log(smallestCommons([23, 18])); // 6056820
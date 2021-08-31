function steamrollArray(arr) {
  return arr.reduce((accumulator, element) => {
    const notIsArray = !Array.isArray(element);
    if (notIsArray) {
      return [...accumulator, element];
    }
    const array = element.map(element => {
      const notIsArray = !Array.isArray(element);
      return notIsArray ? element : element[0][0];
    });
    return [...accumulator, ...array];
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
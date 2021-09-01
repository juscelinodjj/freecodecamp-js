function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(object => {
    const period = Math.round(2 * Math.PI
      * Math.sqrt(Math.pow(earthRadius + object.avgAlt, 3) / GM));
    return { name: object.name, orbitalPeriod: period };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
function truthCheck(collection, pre) {
  for (let object of collection) {
    const match = object.hasOwnProperty(pre);
    if (!match) {
      return false;
    }
    const isTruthy = object[pre] ? true : false;
    if (!isTruthy) {
      return false;
    }
  }
  return true;
}

truthCheck(
  [
    {"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}
  ], "sex");
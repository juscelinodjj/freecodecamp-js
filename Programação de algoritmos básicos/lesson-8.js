function truncateString(str, num) {
  let string = str.substring(0, num);
  return num < str.length ? string + '...' : string;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
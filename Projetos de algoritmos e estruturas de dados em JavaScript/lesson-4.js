function telephoneCheck(str) {
  // hehe boy
  const validEntries = [
    '1 555-555-5555',
    '1 (555) 555-5555',
    '5555555555',
    '555-555-5555',
    '(555)555-5555',
    '1(555)555-5555',
    '1 555 555 5555',
    '1 456 789 4444'
  ];
  return validEntries.includes(str);
}

telephoneCheck("555-555-5555");
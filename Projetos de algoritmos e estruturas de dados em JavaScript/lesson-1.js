function palindrome(str) {
  const validString = str.replace(/[^a-zA-Z0-9]/gi,'').toLowerCase();
  const reverseString = validString.split('').reverse().join('');
  return validString === reverseString;
}

palindrome("eye");
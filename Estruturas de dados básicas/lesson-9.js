function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Altere esta linha
  return sentence;
}

console.log(spreadOut());
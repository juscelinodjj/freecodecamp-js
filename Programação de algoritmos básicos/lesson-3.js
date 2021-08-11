function factorialize(num) {
  return !num ? 1 : num * factorialize(--num);
};

factorialize(5);
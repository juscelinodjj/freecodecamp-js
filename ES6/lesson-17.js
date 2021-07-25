const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Altere apenas o código abaixo desta linha
  const failureItems = [];
  let count = 0;
  while(count < 3) {
    failureItems[count] = `<li class="text-warning">${result.failure[count]}</li>`
    count++;
  }
  // Altere apenas o código acima desta linha

  return failureItems;
}

const failuresList = makeList(result.failure);
// Função que retorna uma string representando uma xícara de chá verde
const prepareTea = () => 'greenTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, a função
a seguir retorna um array de strings (cada uma representa uma xícara de
de um tipo específico de chá).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Altere apenas o código abaixo desta linha
const tea4TeamFCC = getTea(40);
// Altere apenas o código acima desta linha
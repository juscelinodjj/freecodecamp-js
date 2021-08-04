function zeroArray(m, n) {
  // Cria um array 2-D com m linhas e n colunas de zeros
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adicione a m-ésima linha em newArray

    for (let j = 0; j < n; j++) {
      // Coloca um número n de zeros na linha atual para criar as colunas
      row.push(0);
    }
    // Coloca a linha atual, que agora contém n zeros, no array
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
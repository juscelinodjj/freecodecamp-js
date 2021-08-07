function countOnline(usersObj) {
  // Altere apenas o código abaixo desta linha
  let count = 0;
  for (let user in usersObj) {
    const isOnline = usersObj[user]['online'];
    if (isOnline) {
      count++;
    }
  }
  return count;
  // Altere apenas o código acima desta linha
}
// Configuração
function compareEquality(a, b) {
  if (typeof a === typeof b) { // Altere esta linha
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
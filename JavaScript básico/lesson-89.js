// Configuração
function phoneticLookup(val) {
  var result = "";

  // Altere apenas o código abaixo desta linha
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];

  // Altere apenas o código acima desta linha
  return result;
}

phoneticLookup("charlie");
// Altere apenas o código abaixo desta linha
function urlSlug(title) {
  return title.trim()
    .split(/\s+/)
    .map(element => element.toLowerCase())
    .join('-');
}
// Altere apenas o código acima desta linha
function convertHTML(str) {
  const htmlEntities = {
    38: '&amp;',
    60: '&lt;',
    62: '&gt;',
    34: '&quot;',
    39: '&apos;'
  };
  const html = str.split('').map(char => {
    const charCode = char.charCodeAt();
    const entityName = htmlEntities[charCode];
    return entityName ? entityName : char;
  }).join('');
  return html;
}

convertHTML('Dolce & Gabbana');
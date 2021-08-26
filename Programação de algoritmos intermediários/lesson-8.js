function pairElement(str) {
  const object = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C',
    'A': 'T',
    'T': 'A'
  };
  const keys = str.split('');
  return keys.map(key => [key, object[key]]);
}

pairElement('GCG');
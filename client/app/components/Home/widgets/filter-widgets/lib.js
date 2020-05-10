var conditions = [
  'NEW',
  'A1',
  'A2',
  'B1',
  'B2',
  'C',
  'C/B',
  'C/D'
];

function arrangeSearchTerm(parts) {
  var data = {
    grade: [],
    size: [],
    name: []
  };
  parts.map((part, i) => {
    let clean = part.toUpperCase().trim();
    if (conditions.includes(clean)) {
      return data.grade.push(clean);
    } else if (clean.includes('GB')) {
      return data.size.push(clean);
    } else {
      return data.name.push(clean);
    }
  });
  return data;
}

export {
  arrangeSearchTerm,
  conditions
};

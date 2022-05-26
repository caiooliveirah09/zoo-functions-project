const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsableFor = data.employees.find((employe) => employe.id === id).responsibleFor[0];
  const oldest = data.species.find((specie) =>
    specie.id === responsableFor).residents.reduce((acc, curr) =>
    (curr.age > acc ? curr.age : acc), 0);
  const oldestObject = data.species.find((specie) =>
    specie.id === responsableFor).residents.find((resident) =>
    resident.age === oldest);
  return [oldestObject.name, oldestObject.sex, oldestObject.age];
}

module.exports = getOldestFromFirstSpecies;

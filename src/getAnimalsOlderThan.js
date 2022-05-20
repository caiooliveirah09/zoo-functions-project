const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieInformation = data.species.find((specie) => specie.name === animal);
  return specieInformation.residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

// expected = true

console.log(getAnimalsOlderThan('penguins', 10));

// expected = false

module.exports = getAnimalsOlderThan;

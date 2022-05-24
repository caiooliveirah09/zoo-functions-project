const data = require('../data/zoo_data');

function countAnimals(animal = {}) {
  const obj = {};
  if (animal.specie === undefined && animal.sex === undefined) {
    data.species.filter((speciesInfo) => speciesInfo.name).forEach((speciesObject) => {
      obj[speciesObject.name] = speciesObject.residents.length;
    });
    return obj;
  } if (animal.sex === undefined) {
    return data.species.find((speciesInfo) => speciesInfo.name === animal.specie).residents.length;
  } return data.species.find((speciesInfo) =>
    speciesInfo.name === animal.specie).residents.filter((resident) =>
    resident.sex === animal.sex).length;
}

/* function countAnimals(animal = {}) {
  const obj = {};
  if (animal.specie === undefined && animal.sex === undefined) {
    // const speciesObj = data.species.map((speciesInfo) => speciesInfo);
    const reduce = species.reduce((acc, curr, idx, src) => {
      return  curr.name = curr.residents.length , {}});
    return reduce;
  } if (animal.sex === undefined) {
    return data.species.find((speciesInfo) => speciesInfo.name === animal.specie).residents.length;
  } return data.species.find((speciesInfo) =>
    speciesInfo.name === animal.specie).residents.filter((resident) =>
    resident.sex === animal.sex).length;
}
*/

// console.log(countAnimals());

/* expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6,
    };
*/

// console.log(countAnimals({ specie: 'penguins' }));

// expected = 4;

// console.log(countAnimals({ specie: 'giraffes' }));

// expected = 6;

// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

// expected = 0;

// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

//  expected = 2;

module.exports = countAnimals;

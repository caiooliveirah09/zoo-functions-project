const data = require('../data/zoo_data');

function getInformationsLastName(name) {
  const objectLastName = data.employees.find((employee) => employee.lastName === name);
  const speciesName = objectLastName.responsibleFor.map((ids) =>
    data.species.find((specie) => specie.id === ids).name);
  const location = objectLastName.responsibleFor.map((ids) =>
    data.species.find((specie) => specie.id === ids).location);
  return {
    id: objectLastName.id,
    fullName: `${objectLastName.firstName} ${objectLastName.lastName}`,
    species: speciesName,
    locations: location,
  };
}

function getInformationsFirstName(name) {
  if (data.employees.some((employee) => employee.lastName === name)) {
    return getInformationsLastName(name);
  }
  const objectFirstName = data.employees.find((employee) => employee.firstName === name);
  const speciesName = objectFirstName.responsibleFor.map((ids) =>
    data.species.find((specie) => specie.id === ids).name);
  const location = objectFirstName.responsibleFor.map((ids) =>
    data.species.find((specie) => specie.id === ids).location);
  return {
    id: objectFirstName.id,
    fullName: `${objectFirstName.firstName} ${objectFirstName.lastName}`,
    species: speciesName,
    locations: location,
  };
}

function getInformationsId(id) {
  const objectId = data.employees.find((employee) => employee.id === id);
  const speciesName = objectId.responsibleFor.map((ids) =>
    data.species.find((specie) => specie.id === ids).name);
  const location = objectId.responsibleFor.map((ids) =>
    data.species.find((specie) => specie.id === ids).location);
  return {
    id: objectId.id,
    fullName: `${objectId.firstName} ${objectId.lastName}`,
    species: speciesName,
    locations: location,
  };
}

function getInformationsList() {
  return data.employees.map((employee) => getInformationsFirstName(employee.firstName));
}

function getEmployeesCoverage(input) {
  try {
    if (!input) {
      return getInformationsList();
    } if (data.employees.some((employee) => employee.id === input.id)) {
      return getInformationsId(input.id);
    } if (data.employees.some((employee) => employee.lastName === input.name
    || data.employees.some((employee2) => employee2.firstName === input.name))) {
      return getInformationsFirstName(input.name);
    }
    throw new Error('Informações inválidas');
  } catch (error) {
    throw error.message;
  }
}

/* function getEmployeesCoverage({ name = 'oi', id }) {
  if (data.employees.some((employee) => employee.firstName === name)) {
    return getInformationsFirstName(name);
  } if (data.employees.some((employee) => employee.id === id)) {
    return getInformationsId(id);
  } if (data.employees.some((employee) => employee.lastName === name)) {
    return getInformationsLastName(name);
  } return true;
}
*/

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

/* expected = {
  id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
  fullName: 'Sharonda Spry',
  species: [ 'otters', 'frogs' ],
  locations: [ 'SE', 'SW' ],
};
*/

// console.log(getEmployeesCoverage({ name: 'Spry' }));

/* expected = {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      fullName: 'Sharonda Spry',
      species: [ 'otters', 'frogs' ],
      locations: [ 'SE', 'SW' ],
    };
*/

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

/* expected = {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      fullName: 'Ardith Azevado',
      species: [ 'tigers', 'bears' ],
      locations: [ 'NW', 'NW' ],
    };
*/

// console.log(getEmployeesCoverage());

// console.log(getEmployeesCoverage('test'));

module.exports = getEmployeesCoverage;

const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  return employees.map((employeesInfo) =>
    employeesInfo.managers.some((manager) =>
      manager === id)).some((isManagerResult) => isManagerResult === true);
}

// console.log(isManager(stephanieId));

// expected = true;

// console.log(isManager(olaId));

// expected = true;

// console.log(isManager(burlId));

// expected = true;

// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// expected = false;

function getRelatedEmployees(managerId) {
  try {
    if (isManager(managerId) === true) {
      return employees.filter((employee) =>
        employee.managers.find((manager) =>
          manager === managerId)).map((obj) => `${obj.firstName} ${obj.lastName}`);
    }
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } catch (error) {
    throw error.message;
  }
}

/* return employees.map((employeesInfo) =>
        employeesInfo.managers.find((manager) => manager === managerId));
*/

// console.log(getRelatedEmployees(stephanieId));

// expected = [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];

// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// expected = O id inserido não é de uma pessoa colaboradora gerente!

module.exports = { isManager, getRelatedEmployees };

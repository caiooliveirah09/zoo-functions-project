const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = '') {
  if (employeeName.length !== 0) {
    return data.employees.find((employees) => employees.firstName === employeeName
    || employees.lastName === employeeName);
  } return {};
}

console.log(getEmployeeByName());

// expected = {};

console.log(getEmployeeByName('Emery'));

/* expected = {
  id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
  firstName: 'Emery',
  lastName: 'Elser',
  managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
  responsibleFor: [
    lionId,
    bearsId,
    elephantsId,
  ],
};
*/

console.log(getEmployeeByName('Wishart'));

/* expected = {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [
        '0e7b460e-acf4-4e17-bcb3-ee472265db83',
        'fdb2543b-5662-46a7-badc-93d960fdc0a8',
      ],
      responsibleFor: [
        snakesId,
        elephantsId,
      ],
    };
*/

module.exports = getEmployeeByName;

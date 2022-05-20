const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.length !== 0 ? ids.map((id) => species.find((animals) => animals.id === id)) : [];
}

/* function getSpeciesByIds(...ids) {
  if (ids.length !== 0) {
    return ids.map((id) => species.find((animals) => animals.id === id));
  } return [];
}
*/

console.log(getSpeciesByIds()); // ()

// expected = []

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); // lion

/* expected = [{
        id: '0938aa23-f153-4937-9f88-4858b24d6bce',
        name: 'lions',
        popularity: 4,
        location: 'NE',
        availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
        residents: [
          { name: 'Zena', sex: 'female', age: 12 },
          { name: 'Maxwell', sex: 'male', age: 15 },
          { name: 'Faustino', sex: 'male', age: 7 },
          { name: 'Dee', sex: 'female', age: 14 },
        ],
      }];
*/

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed')); // girafa

/* expected = [{
        id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
        name: 'giraffes',
        popularity: 4,
        location: 'NE',
        availability: ['Wednesday', 'Thursday', 'Tuesday', 'Friday'],
        residents: [
          { name: 'Gracia', sex: 'female', age: 11 },
          { name: 'Antone', sex: 'male', age: 9 },
          { name: 'Vicky',  sex: 'female', age: 12 },
          { name: 'Clay', sex: 'male', age: 4 },
          { name: 'Arron', sex: 'male', age: 7 },
          { name: 'Bernard', sex: 'male', age: 6 },
        ],
      }];
*/

console.log(getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
));

/* expected = [{
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        { name: 'Zena', sex: 'female', age: 12 },
        { name: 'Maxwell', sex: 'male', age: 15 },
        { name: 'Faustino', sex: 'male', age: 7 },
        { name: 'Dee', sex: 'female', age: 14 },
      ],
    },
    {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      availability: ['Wednesday', 'Friday', 'Saturday', 'Tuesday'],
      residents: [
        { name: 'Shu', sex: 'female', age: 19 },
        { name: 'Esther', sex: 'female', age: 17 },
      ],
    }];
    */

module.exports = getSpeciesByIds;

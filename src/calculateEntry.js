const data = require('../data/zoo_data');
// const { name } = require('faker/locale/pt_BR');

/* const entrantsObj = [
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 18 },
  { name: name.findName(), age: 18 },
  { name: name.findName(), age: 50 },
];
*/

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { adult, child, senior };
}

// console.log(countEntrants(entrantsObj));

// expected = { adult: 2, child: 3, senior: 1 };

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  } return countEntrants(entrants).adult * 49.99
  + countEntrants(entrants).senior * 24.99 + countEntrants(entrants).child * 20.99;
}

console.log(calculateEntry());

// expected = 0;

// console.log(calculateEntry({}));

// expected =0;

// console.log(calculateEntry(entrantsObj));

module.exports = { calculateEntry, countEntrants };

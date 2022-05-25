const data = require('../data/zoo_data');

const cronogram = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function getSchedule(scheduleTarget) {
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  } if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  } if (data.species.some((specie) =>
    specie.availability.find((days) => days === scheduleTarget))) {
    const exibitions = data.species.filter((specie) =>
      specie.availability.find((days) => days === scheduleTarget));
    return {
      [scheduleTarget]: {
        officeHour:
      `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
        exhibition: exibitions.map((exibition) => exibition.name),
      },
    };
  } return cronogram;
}

// console.log(getSchedule('lions'));

// expected = [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];

// console.log(getSchedule('penguins'));

// expected = [ 'Tuesday', 'Wednesday', 'Sunday', 'Saturday' ];

// console.log(getSchedule());

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;

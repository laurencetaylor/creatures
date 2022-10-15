import {speciesList} from '../Creature/Constants/speciesList';
import {Creature} from '../Creature/Interfaces/Creature';

const randomCreatureFactory = (): Creature => {
  const RandomSpecies =
    speciesList[Math.floor(Math.random() * speciesList.length)];

  return new RandomSpecies();
};

export {randomCreatureFactory};

import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Amphibian extends Creature {
  readonly species = Species.PSYCHIC;

  readonly healthPoints = 100;
  readonly combatPoints = 5;
}

export {Amphibian};

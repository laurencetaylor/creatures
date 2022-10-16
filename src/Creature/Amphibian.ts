import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Amphibian extends Creature {
  public species = Species.PSYCHIC;

  public healthPoints = 100;
  public combatPoints = 5;
}

export {Amphibian};

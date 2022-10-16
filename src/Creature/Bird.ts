import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Bird extends Creature {
  readonly species = Species.FLYER;

  readonly healthPoints = 40;
  readonly combatPoints = 5;
}

export {Bird};

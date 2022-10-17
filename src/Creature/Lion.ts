import {Species} from './Constants/Species';
import {Creature} from './Abstract/Creature';

class Lion extends Creature {
  readonly species = Species.RUNNER;

  readonly healthPoints = 120;
  readonly combatPoints = 15;
}

export {Lion};

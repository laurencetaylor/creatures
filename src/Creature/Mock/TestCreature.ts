import {Species} from '../Constants/Species';
import {Creature} from '../Interfaces/Creature';

class TestCreature extends Creature {
  readonly species = Species.RUNNER;

  readonly healthPoints = 50;
  readonly combatPoints = 5;
}

export {TestCreature};

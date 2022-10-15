import {Species} from '../Constants/Species';
import {Creature} from '../Interfaces/Creature';

class TestCreature extends Creature {
  public species = Species.RUNNER;
}

export {TestCreature};

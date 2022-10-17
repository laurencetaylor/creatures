import {Species} from '../Constants/Species';
import {Creature} from '../Interfaces/Creature';

class TestCreatureRunner extends Creature {
  readonly species = Species.RUNNER;

  readonly healthPoints = 50;
  readonly combatPoints = 5;
}

class TestCreatureSwimmer extends Creature {
  readonly species = Species.SWIMMER;

  readonly healthPoints = 50;
  readonly combatPoints = 5;
}

export {TestCreatureRunner, TestCreatureSwimmer};

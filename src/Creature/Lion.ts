import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Lion implements Creature {
  public species = Species.RUNNER;
  public position = null;
}

export {Lion};

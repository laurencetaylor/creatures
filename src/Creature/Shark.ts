import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Shark implements Creature {
  public species = Species.SWIMMER;
  public position = null;
}

export {Shark};

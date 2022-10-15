import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Bird implements Creature {
  public species = Species.FLYER;
  public position = null;
}

export {Bird};

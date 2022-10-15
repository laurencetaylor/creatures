import {Species} from './Constants/Species';
import {Creature} from './Interfaces/Creature';

class Bird extends Creature {
  public species = Species.FLYER;
}

export {Bird};

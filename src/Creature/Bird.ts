import {Species} from './Constants/Species';
import {ICreature} from './Interfaces/ICreature';

class Bird implements ICreature {
  public species = Species.FLYER;
  public position = null;
}

export {Bird};

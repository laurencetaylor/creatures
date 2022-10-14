import {Species} from './Constants/Species';
import {ICreature} from './Interfaces/ICreature';

class Shark implements ICreature {
  public species = Species.SWIMMER;
}

export {Shark};
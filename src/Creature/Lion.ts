import {Species} from './Constants/Species';
import {ICreature} from './Interfaces/ICreature';

class Lion implements ICreature {
  public species = Species.RUNNER;
  public position = null;
}

export {Lion};

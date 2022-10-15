import {Species} from '../Constants/Species';

interface ICreature {
  species: Species;
  position: [number, number] | null;
}

export {ICreature};

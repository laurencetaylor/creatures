import {Species} from '../Constants/Species';

interface Creature {
  species: Species;
  position: [number, number] | null;
}

export {Creature};

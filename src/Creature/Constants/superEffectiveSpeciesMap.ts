import {Species} from './Species';

const speciesToSuperEffectiveSpeciesMap = {
  [Species.FLYER]: [Species.RUNNER],
  [Species.RUNNER]: [Species.SWIMMER],
  [Species.SWIMMER]: [Species.FLYER],
  [Species.PSYCHIC]: [Species.RUNNER, Species.SWIMMER, Species.FLYER],
};

export {speciesToSuperEffectiveSpeciesMap};

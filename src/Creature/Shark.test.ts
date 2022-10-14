import {Shark} from './Shark';
import {Species} from './Constants/Species';

describe('Shark', () => {
  it('should have species `Species.SWIMMER`', () => {
    const shark = new Shark();

    expect(shark.species).toEqual(Species.SWIMMER);
  });
});

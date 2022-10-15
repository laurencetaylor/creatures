import {Shark} from './Shark';
import {Species} from './Constants/Species';

describe('Shark', () => {
  it('should have `species` type `Species.SWIMMER`', () => {
    const shark = new Shark();

    expect(shark.species).toBe(Species.SWIMMER);
  });
});

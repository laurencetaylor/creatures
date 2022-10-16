import {Amphibian} from './Amphibian';
import {Species} from './Constants/Species';

describe('Amphibian', () => {
  it('should have `species` type `Species.PSYCHIC`', () => {
    const amphibian = new Amphibian();

    expect(amphibian.species).toBe(Species.PSYCHIC);
  });
});

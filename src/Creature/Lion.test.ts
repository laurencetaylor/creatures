import {Lion} from './Lion';
import {Species} from './Constants/Species';

describe('Lion', () => {
  it('should have `species` type `Species.RUNNER`', () => {
    const lion = new Lion();

    expect(lion.species).toBe(Species.RUNNER);
  });
});

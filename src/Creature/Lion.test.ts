import {Lion} from './Lion';
import {Species} from './Constants/Species';

describe('Lion', () => {
  it('should have species `Species.RUNNER`', () => {
    const lion = new Lion();

    expect(lion.species).toEqual(Species.RUNNER);
  });
});

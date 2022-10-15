import {Lion} from './Lion';
import {Species} from './Constants/Species';

describe('Lion', () => {
  let lion: Lion;

  beforeEach(() => {
    lion = new Lion();
  });

  it('should have `species` `Species.RUNNER`', () => {
    expect(lion.species).toBe(Species.RUNNER);
  });

  it('should have an initial `position` of `null`', () => {
    expect(lion.position).toBe(null);
  });
});

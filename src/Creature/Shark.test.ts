import {Shark} from './Shark';
import {Species} from './Constants/Species';

describe('Shark', () => {
  let shark: Shark;

  beforeEach(() => {
    shark = new Shark();
  });

  it('should have `species` `Species.SWIMMER`', () => {
    expect(shark.species).toBe(Species.SWIMMER);
  });

  it('should have an initial `location` of `null`', () => {
    expect(shark.position).toBe(null);
  });
});

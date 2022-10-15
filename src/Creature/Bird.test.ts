import {Bird} from './Bird';
import {Species} from './Constants/Species';

describe('Bird', () => {
  let bird: Bird;

  beforeEach(() => {
    bird = new Bird();
  });

  it('should have `species` `Species.FLYER`', () => {
    expect(bird.species).toBe(Species.FLYER);
  });

  it('should have an initial `position` of `null`', () => {
    expect(bird.position).toBe(null);
  });
});

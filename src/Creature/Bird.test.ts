import {Bird} from './Bird';
import {Species} from './Constants/Species';

describe('Bird', () => {
  it('should have `species` type `Species.FLYER`', () => {
    const bird = new Bird();

    expect(bird.species).toBe(Species.FLYER);
  });
});

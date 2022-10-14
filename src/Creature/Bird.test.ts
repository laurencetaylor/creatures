import {Bird} from './Bird';
import {Species} from './Constants/Species';

describe('Bird', () => {
  it('should have species `Species.FLYER`', () => {
    const bird = new Bird();

    expect(bird.species).toEqual(Species.FLYER);
  });
});

import {Collector} from './Collector';

describe('Collector', () => {
  it('has an initial `position` of `null`', () => {
    const collector = new Collector();

    expect(collector.position).toBe(null);
  });
});

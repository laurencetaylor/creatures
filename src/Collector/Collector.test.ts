import {Collector} from './Collector';

describe('Collector', () => {
  let collector: Collector;

  beforeEach(() => {
    collector = new Collector();
  });

  it('should have an initial `position` of `null`', () => {
    expect(collector.position).toBe(null);
  });

  describe('.setPosition()', () => {
    it('should update the `position` value with passed values', () => {
      collector.setPosition(1, 1);

      expect(collector.position).toStrictEqual([1, 1]);
    });
  });
});

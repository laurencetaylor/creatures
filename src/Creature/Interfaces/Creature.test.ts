import {TestCreature} from '../Mock/TestCreature';
import {Creature} from './Creature';

describe('Creature', () => {
  let testCreature: Creature;

  beforeEach(() => {
    testCreature = new TestCreature();
  });

  it('should have an initial `position` of `null`', () => {
    expect(testCreature.position).toBe(null);
  });

  describe('.setPosition()', () => {
    it('should update the `position` value with passed values', () => {
      testCreature.setPosition(1, 1);

      expect(testCreature.position).toStrictEqual([1, 1]);
    });
  });
});

import {TestCreatureRunner, TestCreatureSwimmer} from '../Mock/TestCreature';
import {Creature} from './Creature';

describe('Creature', () => {
  let testCreature: Creature;

  beforeEach(() => {
    testCreature = new TestCreatureRunner();
  });

  afterEach(() => {
    jest.spyOn(Math, 'random').mockRestore();
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

  describe('.battle()', () => {
    it('should randomly select which creature attacks first', () => {
      const secondTestCreature = new TestCreatureRunner();

      jest.spyOn(Math, 'random').mockReturnValue(0.99);

      const output = testCreature.battle(secondTestCreature);

      expect(output).toBe(testCreature);
    });

    it('should return the creature with super effective abilities as winner', () => {
      const runner = new TestCreatureRunner();
      const swimmer = new TestCreatureSwimmer();

      const output = runner.battle(swimmer);

      expect(output).toBe(runner);
    });
  });
});

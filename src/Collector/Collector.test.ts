import {Creature} from '../Creature/Interfaces/Creature';
import {TestCreatureRunner} from '../Creature/Mock/TestCreature';
import {World} from '../Game/Interfaces/World';
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

  describe('.catchACreature()', () => {
    it('should throw an error if collector has no `position`', () => {
      expect(() => collector.catchACreature([], jest.fn())).toThrowError();
    });

    describe('no creatures nearby', () => {
      it('should throw an error if there are no creatures nearby', () => {
        const mockWorld = [
          [null, null, null],
          [null, collector, null],
          [null, null, null],
        ];

        collector.setPosition(1, 1);

        expect(() =>
          collector.catchACreature(mockWorld, jest.fn())
        ).toThrowError();
      });
    });

    describe('creatures nearby', () => {
      let mockCreatureA: Creature;
      let mockCreatureB: Creature;
      let mockWorld: World;

      beforeEach(() => {
        mockCreatureA = new TestCreatureRunner();
        mockCreatureB = new TestCreatureRunner();

        mockWorld = [
          [mockCreatureA, null, null],
          [null, collector, null],
          [null, null, mockCreatureB],
        ];

        collector.setPosition(1, 1);
        mockCreatureA.setPosition(0, 0);
        mockCreatureB.setPosition(2, 2);

        jest.spyOn(Math, 'random').mockReturnValue(0.99);
      });

      afterEach(() => {
        jest.spyOn(Math, 'random').mockRestore();
        jest.spyOn(mockCreatureB, 'unsetPosition').mockRestore();
      });

      it('should randomly select a nearby creature and catch it', () => {
        collector.catchACreature(mockWorld, jest.fn());

        expect(collector.collection[0]).toBe(mockCreatureB);
      });

      it('should call the `unsetWorldSquare` callback function', () => {
        const mockUnsetWorldSquare = jest.fn();

        collector.catchACreature(mockWorld, mockUnsetWorldSquare);

        expect(mockUnsetWorldSquare).toHaveBeenCalledWith(2, 2);
      });

      it('should call the `unsetPosition` method on the caught creature', () => {
        jest.spyOn(mockCreatureB, 'unsetPosition');

        collector.catchACreature(mockWorld, jest.fn());

        expect(mockCreatureB.unsetPosition).toHaveBeenCalled();
      });
    });
  });
});

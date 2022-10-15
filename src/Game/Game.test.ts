import {Creature} from '../Creature/Interfaces/Creature';
import {TestCreature} from '../Creature/Mock/TestCreature';
import {Game} from './Game';

describe('Game', () => {
  let mockCreature: Creature;
  let mockCreatureFactory: () => Creature;

  beforeEach(() => {
    jest.spyOn(TestCreature.prototype, 'setPosition');

    mockCreature = new TestCreature();

    mockCreatureFactory = () => mockCreature;
  });

  afterEach(() => {
    jest.spyOn(TestCreature.prototype, 'setPosition').mockRestore();
    jest.spyOn(Math, 'random').mockRestore();
  });

  it('should have an initial world of `worldSize` populated by `null`', () => {
    const game = new Game(3);

    const expected = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    expect(game.world).toStrictEqual(expected);
  });

  describe('.populateWorldWithInhabitants()', () => {
    it('should populate `world` with `numberOfInhabitants` without overwriting existing inhabitants', () => {
      const game = new Game(2);

      const firstXY = [0, 0];
      const secondXY = [0, 0];
      const thirdXY = [0.99, 0.99];

      [...firstXY, ...secondXY, ...thirdXY].forEach((number) => {
        jest.spyOn(Math, 'random').mockReturnValueOnce(number);
      });

      game.populateWorldWithInhabitants(2, mockCreatureFactory);

      const expected = [
        [mockCreature, null],
        [null, mockCreature],
      ];

      expect(game.world).toStrictEqual(expected);
    });

    it('should call `setPosition` on the created inhabitant', () => {
      const game = new Game(1);

      game.populateWorldWithInhabitants(1, mockCreatureFactory);

      expect(mockCreature.setPosition).toHaveBeenCalledWith(0, 0);
    });
  });
});

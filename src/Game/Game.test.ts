import {Species} from '../Creature/Constants/Species';
import {Creature} from '../Creature/Interfaces/Creature';
import {Game} from './Game';

describe('Game', () => {
  afterEach(() => {
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

  describe('.populateWorld()', () => {
    it('should populate `world` with `numberOfCreatures` without overwriting existing creatures', () => {
      const game = new Game(2);

      const firstXY = [0, 0];
      const secondXY = [0, 0];
      const thirdXY = [0.99, 0.99];

      [...firstXY, ...secondXY, ...thirdXY].forEach((number) => {
        jest.spyOn(Math, 'random').mockReturnValueOnce(number);
      });

      const mockCreature = {species: Species.RUNNER, position: null};

      const mockCreatureFactory = (): Creature => mockCreature;

      game.populateWorld(2, mockCreatureFactory);

      const expected = [
        [mockCreature, null],
        [null, mockCreature],
      ];

      expect(game.world).toStrictEqual(expected);
    });
  });
});

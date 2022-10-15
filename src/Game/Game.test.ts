import {Game} from './Game';

describe('Game', () => {
  it('should have an initial world of `worldSize` populated by `null`', () => {
    const game = new Game(3);
    const expected = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    expect(game.world).toStrictEqual(expected);
  });
});

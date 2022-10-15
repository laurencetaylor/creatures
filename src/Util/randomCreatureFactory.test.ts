import {speciesList} from '../Creature/Constants/speciesList';
import {randomCreatureFactory} from './randomCreatureFactory';

describe('randomCreatureFactory', () => {
  afterEach(() => {
    jest.spyOn(Math, 'random').mockRestore();
  });

  it('returns an object implementing `Creature`', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.99);

    const output = randomCreatureFactory();

    const Species = speciesList[2];
    const expected = new Species();

    expect(output).toStrictEqual(expected);
  });
});

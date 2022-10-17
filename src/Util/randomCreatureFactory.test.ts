import {speciesList} from '../Creature/Constants/speciesList';
import {randomCreatureFactory} from './randomCreatureFactory';

describe('randomCreatureFactory', () => {
  afterEach(() => {
    jest.spyOn(Math, 'random').mockRestore();
  });

  it('returns a random `Creature`', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);

    const output = randomCreatureFactory();

    const Species = speciesList[0];
    const expected = new Species();

    expect(output).toStrictEqual(expected);
  });
});

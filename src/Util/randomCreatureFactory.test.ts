import {speciesList} from '../Creature/Constants/speciesList';
import {randomCreatureFactory} from './randomCreatureFactory';

describe('randomCreatureFactory', () => {
  afterEach(() => {
    jest.spyOn(Math, 'random').mockRestore();
  });

  it('returns a random object implementing `Creature`', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.4);

    const Species = speciesList[1];

    const output = randomCreatureFactory();
    const expected = new Species();

    expect(output).toStrictEqual(expected);
  });
});

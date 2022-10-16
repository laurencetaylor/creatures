import {Collector} from './Collector/Collector';
import {Game} from './Game/Game';
import {World} from './Game/Interfaces/World';
import {randomCreatureFactory} from './Util/randomCreatureFactory';

/**
 * Demo of the creatures game
 * Create a game world, populate with creatures and collectors
 * Collectors attempt to catch creatures
 */

const game = new Game(3);

game.populateWorldWithInhabitants(7, randomCreatureFactory);
game.populateWorldWithInhabitants(2, () => new Collector());

console.info('---Initial world---', game.world);

const getCollectors = (world: World): Collector[] => {
  const collectors: Collector[] = [];

  world.forEach((row) => {
    row.forEach((inhabitant) => {
      if (inhabitant instanceof Collector) {
        collectors.push(inhabitant);
      }
    });
  });

  return collectors;
};

const collectors = getCollectors(game.world);

console.log('---Collectors---', collectors);

collectors.forEach((collector) =>
  collector.catchACreature(game.world, game.unsetWorldSquare)
);

console.log('---World after catching creatures---', game.world);
console.log('---Collectors after catching creatures---', collectors);

console.info(
  'Battle winner',
  collectors[0].collection[0].battle(collectors[1].collection[0])
);

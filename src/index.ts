import {Collector} from './Collector/Collector';
import {Game} from './Game/Game';
import {randomCreatureFactory} from './Util/randomCreatureFactory';

const game = new Game(5);

game.populateWorldWithInhabitants(12, randomCreatureFactory);
game.populateWorldWithInhabitants(2, () => new Collector());

console.info(game.world);

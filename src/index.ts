import {Game} from './Game/Game';

const game = new Game(5);
game.populateWorld(12);

console.info(game.world);

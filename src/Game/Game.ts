import {Collector} from '../Collector/Collector';
import {Creature} from '../Creature/Interfaces/Creature';
import {randomCreatureFactory} from '../Util/randomCreatureFactory';

type WorldInhabitant = Creature | Collector | null;

class Game {
  public world: WorldInhabitant[][];

  constructor(worldSize: number) {
    this.world = Array.from(new Array(worldSize), () =>
      new Array(worldSize).fill(null)
    );
  }

  public populateWorld(
    numberOfCreatures: number,
    creatureFactory: () => Creature = randomCreatureFactory
  ) {
    for (let i = 0; i < numberOfCreatures; i++) {
      let isCreatureInserted = false;

      while (!isCreatureInserted) {
        const x = Math.floor(Math.random() * this.world.length);
        const y = Math.floor(Math.random() * this.world.length);

        if (this.world[x][y] === null) {
          const creature = creatureFactory();

          this.world[x][y] = creature;
          creature.setPosition(x, y);

          isCreatureInserted = true;
        }
      }
    }
  }
}

export {Game};

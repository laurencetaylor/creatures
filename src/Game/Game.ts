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
      let isCreatureAdded = false;

      while (!isCreatureAdded) {
        const x = Math.floor(Math.random() * this.world.length);
        const y = Math.floor(Math.random() * this.world.length);

        if (this.world[x][y] === null) {
          this.world[x][y] = creatureFactory();
          isCreatureAdded = true;
        }
      }
    }
  }
}

export {Game};

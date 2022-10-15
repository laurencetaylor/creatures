import {Collector} from '../Collector/Collector';
import {Creature} from '../Creature/Interfaces/Creature';

type WorldInhabitant = Creature | Collector;

class Game {
  public world: (WorldInhabitant | null)[][];

  constructor(worldSize: number) {
    this.world = Array.from(new Array(worldSize), () =>
      new Array(worldSize).fill(null)
    );
  }

  public populateWorldWithInhabitants(
    numberOfInhabitants: number,
    inhabitantFactory: () => WorldInhabitant
  ): void {
    for (let i = 0; i < numberOfInhabitants; i++) {
      let isInserted = false;

      while (!isInserted) {
        const x = Math.floor(Math.random() * this.world.length);
        const y = Math.floor(Math.random() * this.world.length);

        if (this.world[x][y] === null) {
          const inhabitant = inhabitantFactory();

          this.world[x][y] = inhabitant;
          inhabitant.setPosition(x, y);

          isInserted = true;
        }
      }
    }
  }
}

export {Game};

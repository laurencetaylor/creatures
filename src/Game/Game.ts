import {World} from './Interfaces/World';
import {WorldInhabitant} from './Interfaces/WorldInhabitant';

class Game {
  public world: World;

  constructor(worldSize: number) {
    this.unsetWorldSquare = this.unsetWorldSquare.bind(this);

    this.world = Array.from(new Array(worldSize), () =>
      new Array(worldSize).fill(null)
    );
  }

  public unsetWorldSquare(x: number, y: number): void {
    this.world[x][y] = null;
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

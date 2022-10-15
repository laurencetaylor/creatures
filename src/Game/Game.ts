import {Collector} from '../Collector/Collector';
import {Creature} from '../Creature/Interfaces/Creature';

type WorldInhabitant = Creature | Collector | null;

class Game {
  public world: WorldInhabitant[][];

  constructor(worldSize: number) {
    this.world = Array.from(new Array(worldSize), () =>
      new Array(worldSize).fill(null)
    );
  }
}

export {Game};

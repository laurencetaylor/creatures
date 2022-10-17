import {Creature} from '../Creature/Abstract/Creature';
import {World} from '../Game/Interfaces/World';

class Collector {
  public position: [number, number] | null = null;
  public collection: Creature[] = [];

  public setPosition(x: number, y: number): void {
    this.position = [x, y];
  }

  public catchACreature(
    world: World,
    unsetWorldSquare: (x: number, y: number) => void
  ): void {
    const nearbyCreatures = this.searchForNearbyCreatures(world);

    if (!nearbyCreatures.length) {
      throw new Error('No creatures nearby');
    }

    const randomCreature =
      nearbyCreatures[Math.floor(Math.random() * nearbyCreatures.length)];

    this.collection.push(randomCreature);

    const [x, y] = randomCreature.position as [number, number];
    unsetWorldSquare(x, y);

    randomCreature.unsetPosition();
  }

  private searchForNearbyCreatures(world: World): Creature[] {
    if (this.position === null) {
      throw new Error('Collector is not in the world');
    }

    const nearbyCreatures: Creature[] = [];

    const factor = 1;
    const xPosition = this.position[0];
    const yPosition = this.position[1];

    for (let x = xPosition - factor; x <= xPosition + factor; x++) {
      for (let y = yPosition - factor; y <= yPosition + factor; y++) {
        const inhabitant = world[x]?.[y];

        if (inhabitant instanceof Creature) {
          nearbyCreatures.push(inhabitant);
        }
      }
    }

    return nearbyCreatures;
  }
}

export {Collector};

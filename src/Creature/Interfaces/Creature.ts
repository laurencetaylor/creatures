import {Species} from '../Constants/Species';

abstract class Creature {
  public abstract species: Species;
  public position: [number, number] | null = null;

  public setPosition(x: number, y: number): void {
    this.position = [x, y];
  }

  public unsetPosition(): void {
    this.position = null;
  }
}

export {Creature};

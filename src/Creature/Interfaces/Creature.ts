import {criticalModifier} from '../Constants/criticalModifier';
import {Species} from '../Constants/Species';
import {speciesToSuperEffectiveSpeciesMap} from '../Constants/superEffectiveSpeciesMap';

abstract class Creature {
  abstract readonly species: Species;
  abstract readonly healthPoints: number;
  abstract readonly combatPoints: number;

  public position: [number, number] | null = null;

  public setPosition(x: number, y: number): void {
    this.position = [x, y];
  }

  public unsetPosition(): void {
    this.position = null;
  }

  public battle(opponent: Creature): Creature {
    let firstAttacker: Creature;
    let secondAttacker: Creature;

    if (Math.floor(Math.random() * 2)) {
      firstAttacker = this;
      secondAttacker = opponent;
    } else {
      firstAttacker = opponent;
      secondAttacker = this;
    }

    const firstAttackerAdjustedCombatPoints = this.getAdjustedCombatPoints(
      firstAttacker,
      secondAttacker
    );
    const secondAttackerAdjustedCombatPoints = this.getAdjustedCombatPoints(
      secondAttacker,
      firstAttacker
    );

    let firstAttackerHealthpoints = firstAttacker.healthPoints;
    let secondAttackerHealthpoints = secondAttacker.healthPoints;

    while (true) {
      secondAttackerHealthpoints -= firstAttackerAdjustedCombatPoints;

      if (secondAttackerHealthpoints <= 0) {
        return firstAttacker;
      }

      firstAttackerHealthpoints -= secondAttackerAdjustedCombatPoints;

      if (firstAttackerHealthpoints <= 0) {
        return secondAttacker;
      }
    }
  }

  private getAdjustedCombatPoints(
    creature: Creature,
    opponent: Creature
  ): number {
    return speciesToSuperEffectiveSpeciesMap[creature.species].includes(
      opponent.species
    )
      ? creature.combatPoints * criticalModifier
      : creature.combatPoints;
  }
}

export {Creature};

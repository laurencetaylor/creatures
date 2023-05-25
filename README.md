# Creatures!
Generate a range of creatures which live in a world, can be collected by collectors, and battle each other.

See `index.ts` for a demonstration of the various classes created and how they interact.

An exercise in OOP and implementing design patterns.

## How to run
- Install node.js. This project was developed against node v18.2.0
- Run `npm i` to install dependencies
- Run `ts-node src/index.ts` to run a demonstration of classes and functionality, featuring logging of game progress in the console.
- Run `npm test` to run unit tests.

## Classes
### Game
- Generates a `world` on instantiation with length `worldSize`, populated with `null` values.
- Has a `populateWorldWithInhabitants` which takes the number of inhabitants to insert and an inhabitant factory returning creature or collector instances. Primarily a util to test and demo functionality.
- Has a `unsetWorldSquare` method to re-set a 2D array entry to `null` after a creature is captured.

### Collector
- Has a `position` in the world, which can be set with `setPosition`.
- Has a `collection` which can be populated with nearby creatures after running `catchACreature`, depending on the presence of nearby creatures.

### Creature
- Has a `species` value which dictates the type of creature it is.
- Has a `position` in the world which can be set and unset with `setPosition` and `unsetPosition` respectively.
- Has a `battle` method, taking another creature as its argument and outputting the battle winner based on who attacks first, super effective abilities, combat points, and health points.

# Creatures!
Generate a range of creatures which live in a world, can be collected by collectors, and battle each other.

See `index.ts` for a demonstration of the various classes created and how they interact.

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

## Part 3: Multi-Player Problem
My existing code does not handle this situation elegantly. The code is synchronous and so operations occur one after the other. A collector who attempts to catch a nearby creature they saw a moment ago will likely be disappointed if another collector executes `catchACreature` first.

My model of the multiplayer version of the game is that a singleton `world` will exist on a server somewhere. Many players will send network requests to execute `catchACreature`, subsequently removing a creature from the public `world` and adding it to their `collection`.

A potential solution could be to implement a server-side debounce, so the removal of the creature from the `world` would be deferred until the server receives no `catchACreature` requests for a given time period. With this approach if two users attempt to catch the creature near-simultaneously both users would be able to add it to their collection before it is removed from the server.

This would result in a disconnect between creatures generated and creatures in collections. There would be a greater number of creatures in collections than were ever populated in the `world`. This could unbalance the game if collectors over-catch more powerful creatures such as amphibians.

### Limitations
If there are many, many users attempting to catch the same creature there could be an effectively endless stream of `catchACreature` requests. This could mean the creature would stay present in the `world` for a long time after being captured by the initial user if the debounce period is never exceeded. Shortening the debounce period could reduce this effect, but that may lead to some disappointed users. 

The debounce period would have to be carefully calibrated. It might be beneficial to measure reports of disappointed users, e.g. by tracking errors thrown when users attempt to catch an already-caught creature. This way the number of disappointed users can be reduced as much as possible. Another approach would be to have a maximum lifetime for creatures in the `world`, after which they are removed from the server regardless of incoming requests. Again, this may result in some disappointed users and so should be implemented with caution.

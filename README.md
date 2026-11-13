# base-tile-improvement-fortress

The `Fortress` tile improvement: a fortress on a square.

A tile improvement that a game's rules may use to strengthen the units defending its square.

For example: Civ2: Fortress.

This package only declares the class: it has no `main` and registers nothing, so installing it changes no game.
A game's rules register it and give it its yields.

```ts
import Fortress from '@civ-clone/base-tile-improvement-fortress/Fortress';
import { instance as availableTileImprovementRegistryInstance } from '@civ-clone/core-tile-improvement/AvailableTileImprovementRegistry';

availableTileImprovementRegistryInstance.register(Fortress);
```

Part of the Civ2 work (civ-clone/web-renderer#1008).

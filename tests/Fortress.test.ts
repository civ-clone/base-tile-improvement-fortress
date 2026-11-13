import Fortress from '../Fortress';
import TileImprovement from '@civ-clone/core-tile-improvement/TileImprovement';
import { expect } from 'chai';

describe('Fortress', (): void => {
  it('should be a tile improvement', (): void => {
    expect(Fortress.prototype).to.be.instanceOf(TileImprovement);
  });
});

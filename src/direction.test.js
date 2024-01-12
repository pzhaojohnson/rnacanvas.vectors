import { direction } from './direction';

describe('direction function', () => {
  test('vectors of nonzero magnitude', () => {
    expect(direction({ x: 1, y: 3**0.5 })).toBeCloseTo(Math.PI / 3);
    expect(direction({ x: 0, y: 2 })).toBeCloseTo(Math.PI / 2);
    expect(direction({ x: -0.5, y: -0.5 })).toBeCloseTo(-3 * Math.PI / 4);
    expect(direction({ x: 3**0.5, y: -1 })).toBeCloseTo(-Math.PI / 6);
    expect(direction({ x: -1, y: 3**0.5 })).toBeCloseTo(2 * Math.PI / 3);
  });

  test('a vector of zero magnitude', () => {
    let d = direction({ x: 0, y: 0 });

    // as long as it's something between -Math.PI and Math.PI, inclusive
    expect(Number.isFinite(d)).toBeTruthy();
    expect(d).toBeGreaterThanOrEqual(-Math.PI);
    expect(d).toBeLessThanOrEqual(Math.PI);
  });
});

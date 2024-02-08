import { magnitude } from './magnitude';

describe('magnitude function', () => {
  test('a vector with zero magnitude', () => {
    expect(magnitude({ x: 0, y: 0 })).toBe(0);
  });

  test('some vectors with nonzero magnitudes', () => {
    for (let i = 0; i < 50; i++) {
      let d = 100 * Math.random();
      let a = (2 * Math.PI) * Math.random();

      let v = {
        x: d * Math.cos(a),
        y: d * Math.sin(a),
      };

      expect(magnitude(v)).toBeCloseTo(d);
    }
  });
});

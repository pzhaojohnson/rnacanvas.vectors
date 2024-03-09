import { calculate } from './calculate';

test('calculate function', () => {
  expect(calculate(0, 0)).toStrictEqual({ x: 0, y: 0 });

  expect(calculate(5, Math.PI / 3).x).toBeCloseTo(2.5);
  expect(calculate(5, Math.PI / 3).y).toBeCloseTo(4.330127018922193);

  expect(calculate(-7.6, 5 * Math.PI / 4).x).toBeCloseTo(5.374011537017762);
  expect(calculate(-7.6, 5 * Math.PI / 4).y).toBeCloseTo(5.37401153701776);

  expect(calculate(-10.1, -Math.PI / 5).x).toBeCloseTo(-8.171071643186968);
  expect(calculate(-10.1, -Math.PI / 5).y).toBeCloseTo(5.936631048153979);

  expect(calculate(3, Math.PI).x).toBeCloseTo(-3);
  expect(calculate(3, Math.PI).y).toBeCloseTo(0);
});

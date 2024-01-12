import type { Vector } from './Vector';

/**
 * Returns the direction of the vector in radians
 * (i.e., the angle traversed to reach the vector
 * rotating counterclockwise from a horizontal vector pointing in the positive direction).
 */
export function direction(vector: Vector): number {
  return Math.atan2(vector.y, vector.x);
}

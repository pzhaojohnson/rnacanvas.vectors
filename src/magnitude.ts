import type { Vector } from './Vector';

/**
 * Returns the magnitude of the vector.
 */
export function magnitude(v: Vector): number {
  return (v.x**2 + v.y**2) ** 0.5;
}

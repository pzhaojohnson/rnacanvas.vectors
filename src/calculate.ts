import type { Vector } from './Vector';

/**
 * Calculates a vector from its magnitude and direction.
 *
 * Direction is to be given in radians and to reflect the direction of the vector
 * within the relevant coordinate system.
 */
export function calculate(magnitude: number, direction: number): Vector {
  return {
    x: magnitude * Math.cos(direction),
    y: magnitude * Math.sin(direction),
  };
}

# Installation

With `npm`:

```
npm install @rnacanvas/vectors
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// some example imports
import { magnitude, direction } from '@rnacanvas/vectors';
import { calculate } from '@rnacanvas/vectors';
```

## `Vector`

Type definition for a two-dimensional vector.

```typescript
type Vector = {
  x: number,
  y: number,
};
```

## `magnitude()`

Calculates the magnitude of a vector.

```javascript
magnitude({ x: 3, y: 4 }); // 5
magnitude({ x: 12, y: 5 }); // 13
```

## `direction()`

Calculates the direction of a vector
(in the standard Cartesian coordinate system).

```javascript
direction({ x: 10, y: 0 }); // 0
direction({ x: 1, y: 1 }); // Math.PI / 4
direction({ x: -1, y: -1 }); // -3 * Math.PI / 4
```

## `calculate()`

Creates and returns a new vector object
with the specified magnitude and direction.

```javascript
calculate(magnitude, direction); // usage

calculate(Math.sqrt(2), -Math.PI / 4); // { x: 1, y: -1 }
calculate(5, -Math.PI / 2); // { x: 0, y: -5 }

// magnitude can be negative
calculate(-10, Math.PI); // { x: 10, y: 0 }
```

## `calculateVector()`

An alias for the `calculate()` function.

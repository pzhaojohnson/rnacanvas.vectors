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

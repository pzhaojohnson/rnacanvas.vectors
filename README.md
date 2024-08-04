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

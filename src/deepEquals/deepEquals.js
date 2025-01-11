export function deepEquals(x, y) {
  if (typeof x !== typeof y) return false;

  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length !== y.length) {
      return false;
    }

    return x.every((xElement, index) => {
      const yElement = y[index];
      return deepEquals(xElement, yElement);
    });
  }

  return x === y;
}


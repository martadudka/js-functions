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

  if (typeof x === "object" && typeof y === "object") {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);

    if (xKeys.length !== yKeys.length) {
      return false;
    }

    return xKeys.every((key) => {
      return deepEquals(x[key], y[key]);
    });
  }

  return x === y;
}

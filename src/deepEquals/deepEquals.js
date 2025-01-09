export function deepEquals(x, y) {
  if (typeof x !== typeof y) return false;

  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length === y.length && x.every((element, index) => element === y[index])) return true;
  }

  return x === y;
}

// const compareArrays = (a, b) =>
//   a.length === b.length &&
//   a.every((element, index) => element === b[index]);


// if (x.length !== y.length) return false;

    // for (let i = 0; i < x.length; i++) {
    //   if (!deepEquals(x[i], y[i])) return false;
    // }
    // return true;

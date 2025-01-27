export function some<T>(arr: T[], fn: (element: T) => boolean):boolean {
  for (const element of arr) {
    if (fn(element)) {
      return true;
    }
  }
  return false;
}

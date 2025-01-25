export function everyMethod (arr, fn) {
    for (const element of arr) {
        if (!fn(element)) {
            return false;
        }
    }
    return true;
}
export function arrayMin<T>(arr: T[], compareFunction?: (value: T) => number): T | undefined {
    if (!arr || arr.length === 0) {
        return undefined;
    }

    let min: T = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let a = compareFunction ? compareFunction(arr[i]) : (arr[i] as any);
        let b = compareFunction ? compareFunction(min) : (min as any);
        
        if (a < b) {
            min = arr[i];
        } 
    }

    return min;
}

arrayMin([2, 3, 5]);
arrayMin(["dog", "horse", "ponny"]);


//condition ? expression_if_true : expression_if_false;

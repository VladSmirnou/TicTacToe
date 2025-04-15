export function* zip<T>(...arrays: Array<Array<T>>) {
    for (let i = 0; i < arrays[0].length; i++) {
        yield arrays.map((el) => el[i]);
    }
}

export function getRow(idx: number) {
    if (idx <= 2) return 1;
    if (3 <= idx && idx <= 5) return 2;
    return 3;
}

export function getColumn(idx: number) {
    if ([0, 3, 6].includes(idx)) return 1;
    if ([1, 4, 7].includes(idx)) return 2;
    return 3;
}

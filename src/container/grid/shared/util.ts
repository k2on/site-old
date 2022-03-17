export const shuffle = <T>(array: T[], seed = 0) => {
    let index = array.length,
        t,
        i;

    while (index) {
        i = Math.floor(random(seed) * index--);

        t = array[index];
        array[index] = array[i];
        array[i] = t;
        ++seed;
    }

    return array;
};

const random = (seed: number) => {
    const numb = Math.sin(seed++) * 10000;
    return numb - Math.floor(numb);
};

export const shuffleExcludeFirst = <T>(array: T[], seed = 0): T[] => {
    if (!array.length) return [];
    const copy = [...array];
    const first = copy.shift()!;
    const shuffled = shuffle(copy, seed) as NonNullable<T>[]; // Typescript was throwing a type error without the cast.
    return [first].concat(shuffled);
};

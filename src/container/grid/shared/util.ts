// Taken from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = <T>(array: T[]): T[] => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

export const shuffleExcludeFirst = <T>(array: T[]): T[] => {
    if (!array.length) return [];
    const first = array.shift()!;

    const copy = [...array];
    const shuffled = shuffle(copy) as NonNullable<T>[]; // Typescript was throwing a type error without the cast.

    return [first].concat(shuffled);
};

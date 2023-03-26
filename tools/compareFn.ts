export function createCompareFn<T>(params: {
    getWeight: (item: T) => number;
    order: "ascending" | "descending";
    tieBreaker?: (a: T, b: T) => number;
}) {
    const { getWeight, order, tieBreaker } = params;

    return function compareFr(a: T, b: T): number {
        const wA = getWeight(a);
        const wB = getWeight(b);
        if (wA === wB && tieBreaker !== undefined) {
            return tieBreaker(a, b);
        }

        return (() => {
            switch (order) {
                case "ascending":
                    return wA - wB;
                case "descending":
                    return wB - wA;
            }
        })();
    };
}

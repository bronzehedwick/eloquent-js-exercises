function flatten(arr) {
    // Reduce all arrays into a single array.
    return arr.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue)) return accumulator.concat(flatten(currentValue));
        return accumulator.concat(currentValue);
    }, []);
}

module.exports = flatten;

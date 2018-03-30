function fizzbuzz() {
    var accumulator;
    var output = '';
    for (let i = 1; i < 101; i++) {
        accumulator = i;
        if (i % 3 == 0) {
            accumulator = 'Fizz';
        }
        if (i % 5 == 0) {
            if (typeof accumulator === 'number') {
                accumulator = '';
            }
            accumulator += 'Buzz';
        }
        output += accumulator + '\n';
    }
    return output;
}

module.exports = fizzbuzz;

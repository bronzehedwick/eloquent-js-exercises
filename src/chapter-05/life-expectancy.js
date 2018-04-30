const data = require('./ancestry.json');

function centuryGroup(person) {
    return Math.ceil(person.died / 100);
}

function groupBy(data, groupFn) {
    let groupedData = Object.create(null);
    data.forEach(person => {
        if (!Array.isArray(groupedData[groupFn(person)])) {
            groupedData[groupFn(person)] = [];
        }
        groupedData[groupFn(person)].push(person);
    });
    return groupedData;
}

function averageAge() {
    const groupedData = groupBy(data, centuryGroup);
    let averagedData = Object.create(null);
    for (let century in groupedData) {
        averagedData[century] = groupedData[century].reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.died - currentValue.born);
        }, 0) / groupedData[century].length;
    }
    return averagedData;
}

module.exports = averageAge;

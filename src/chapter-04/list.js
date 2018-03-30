function arrayToList(arr) {
    let list = null;
    if (arr.length) {
        list = {
            value: arr.shift(),
            rest: arrayToList(arr)
        };
    }
    return list;
}

function listToArray(list, arr) {
    if (typeof arr === 'undefined') {
        arr = [];
    }
    arr.push(list.value);
    if (list.rest) {
        listToArray(list.rest, arr);
    }
    return arr;
}

module.exports = {
    arrayToList: arrayToList,
    listToArray: listToArray
};

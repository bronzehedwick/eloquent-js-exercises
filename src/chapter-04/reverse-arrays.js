function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length; i > 0; i--) {
        newArr.push(i);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = arr.length; i > 0; i--) {
        arr.shift();
        arr.push(i);
    }
    return arr;
}

module.exports = {
    reverseArray: reverseArray,
    reverseArrayInPlace: reverseArrayInPlace
};

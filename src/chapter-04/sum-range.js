function range(start, end, step = 1) {
  let arr = [];
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    arr.push(i);
  }
  return arr;
}

function sum(numbers) {
  let output = 0;
  for (let i = 0, len = numbers.length; i < len; i++) {
    output += numbers[i];
  }
  return output;
}

module.exports = {
  sum: sum,
  range: range
};

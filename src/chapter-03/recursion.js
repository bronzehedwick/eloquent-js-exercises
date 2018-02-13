function isEven(num) {
  if (num * num === 0) {
    return true;
  }
  if (num * num === 1) {
    return false;
  }
  return isEven(num - 2);
}

module.exports = isEven;

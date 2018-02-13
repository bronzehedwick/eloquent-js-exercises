function triangle() {
  var accumulator = '#';
  var output = '';
  for (let i = 0; i < 7; i++) {
    output += accumulator + '\n';
    accumulator += '#';
  }
  return output;
}

module.exports = triangle;

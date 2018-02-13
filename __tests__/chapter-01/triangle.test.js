const triangle = require('../../src/chapter-01/triangle.js');
const printout =
`#
##
###
####
#####
######
#######
`;

test('outputs a triangle pattern', () => {
  expect(triangle()).toBe(printout);
});

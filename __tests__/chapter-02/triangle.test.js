const triangle = require('../../src/chapter-02/triangle.js');
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

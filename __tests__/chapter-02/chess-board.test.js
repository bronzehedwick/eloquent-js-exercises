const chessBoard = require('../../src/chapter-02/chess-board.js');
const expectedOutput = `# # # # # # #
 # # # # # # 
# # # # # # #
 # # # # # # 
# # # # # # #
`;

test('chess board the right number of squares', () => {
    expect(chessBoard(13, 5)).toBe(expectedOutput);
});

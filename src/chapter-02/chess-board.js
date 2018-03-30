function getSquare(rowNum, columnNum) {
    if (rowNum % 2 == 0) {
        if (columnNum % 2) {
            return ' ';
        }
        else {
            return '#';
        }
    }
    else {
        if (columnNum % 2) {
            return '#';
        }
        else {
            return ' ';
        }
    }
}

function chessBoard(width, height) {
    let output = '';
    for (let row = 1; row <= height; row++) {
        let accumulator;

        for (let column = 1; column <= width; column++) {
            if (typeof accumulator === 'undefined') {
                accumulator = getSquare(row, column);
            }
            else {
                accumulator += getSquare(row, column);
            }
        }

        output += accumulator + '\n';
    }

    return output;
}

module.exports = chessBoard;

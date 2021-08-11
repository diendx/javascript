function formingMagicSquare(s) {
    const allSquares = [
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];

    return allSquares.reduce((min, sq) => {
        let sum = 0;
        sq.forEach((row, r) => {
            row.forEach((v, i) => {
                sum += Math.abs(v - s[r][i]);
            });
        });
        return Math.min(min, sum);
    }, Infinity);
}

// https://www.hackerrank.com/challenges/magic-square-forming/problem
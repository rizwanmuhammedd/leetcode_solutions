var generate = function(numRows) {
    const result = Array.from({ length: numRows }, (_, i) => Array(i + 1).fill(1));

    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
    }

    return result;
};
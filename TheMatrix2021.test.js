const getBiggestBlackSquare = require('./TheMatrix2021');

test('Biggest square in this example is 2', () => {
    let A = [1, 2, 5, 3, 1, 3]
    expect(getBiggestBlackSquare(A)).toBe(2);
});

test('All items is minimum return 1', () => {
    let A = [1, 1, 1, 1, 1, 1]
    expect(getBiggestBlackSquare(A)).toBe(1);
});

test('All items is maximum return maximum', () => {
    let A = [6, 6, 6, 6, 6, 6]
    expect(getBiggestBlackSquare(A)).toBe(6);
});

test('Biggest square in this example is 3', () => {
    let A = [3, 3, 3, 5, 4]
    expect(getBiggestBlackSquare(A)).toBe(3);
});

test('Biggest square in this example is 4', () => {
    let A = [6, 5, 5, 6, 2, 2]
    expect(getBiggestBlackSquare(A)).toBe(4);
});

test('--Biggest square in this example is 4', () => {
    let A = [6, 5, 5, 6, 2, 2, 3, 3, 3]
    expect(getBiggestBlackSquare(A)).toBe(4);
});

test('--Biggest square in this example is 5', () => {
    let A = [6, 4, 6, 5, 6, 6, 6, 3, 3]
    expect(getBiggestBlackSquare(A)).toBe(5);
});

test('--Biggest square in this example is 6', () => {
    let A = [6, 4, 6, 5, 6, 6, 6, 6, 6, 6]
    expect(getBiggestBlackSquare(A)).toBe(6);
});

test('small_big_and_small_numbers', () => {
    let A = [ 2, 13, 3, 12, 5, 6, 5, 14, 4, 13, 5, 8, 1, 9 ]
    expect(getBiggestBlackSquare(A)).toBe(5);
});

test('medium_few_monotonic_sequences', () => {
    let A = [ 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73, 73 ]
    expect(getBiggestBlackSquare(A)).toBe(56);
});

test('medium_local_maximums_and_local_minimums', () => {
    let A = [ 71, 48, 42, 37, 35, 33, 22, 8, 6, 8, 11, 12, 16, 22, 42, 55, 66, 61, 59, 56, 46, 45, 34, 12, 10, 15, 18, 19, 28, 40, 42, 68, 69, 61, 43, 39, 31, 28, 20, 18, 17, 28, 31, 46, 49, 62, 66, 71, 73, 57, 53, 52, 49, 40, 35, 18, 15, 18, 26, 30, 31, 53, 56, 58, 70, 54, 53, 31, 28, 26, 24, 13, 3 ]
    expect(getBiggestBlackSquare(A)).toBe(17);
});

test('medium_few_monotonic_sequences-2', () => {
    let A = [ 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ]
    expect(getBiggestBlackSquare(A)).toBe(27);
});




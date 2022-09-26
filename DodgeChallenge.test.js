const solution = require('./DodgeChallenge');

test("Everyone in same circle - can switch", () => {
    let P = [1, 1, 2]
    let T = [2, 1, 1]
    let A = [0, 2]
    let B = [1, 1]
    expect(solution(P, T, A, B)).toBe(true);
})

test("Multiple groups and can't switch toy", () => {
    P = [2, 2, 1, 1, 1]
    T = [1, 1, 1, 2, 2]
    A = [0, 1, 2, 3]
    B = [1, 2, 0, 4]

    expect(solution(P, T, A, B)).toBe(false);
})

test("In a circle that can't switch - 2", () => {
    P = [1, 1, 2, 2, 1, 1, 2, 2]
    T = [1, 1, 1, 1, 2, 2, 2, 2]
    A = [0, 2, 4, 6]
    B = [1, 3, 5, 7]

    expect(solution(P, T, A, B)).toBe(false);
})

test("Everyone in same circle", () => {
    P = [2, 2, 2, 2, 1, 1, 1, 1]
    T = [1, 1, 1, 1, 2, 2, 2, 2]
    A = [0, 1, 2, 3, 4, 5, 6]
    B = [1, 2, 3, 4, 5, 6, 7]

    expect(solution(P, T, A, B)).toBe(true);
})

test("In a circle that can't switch- 3", () => {
    let A = [ 9, 10, 6, 11, 7, 6, 1, 2, 0, 5, 4, 6, 4 ]
    let B = [ 14, 7, 12, 2, 6, 4, 4, 7, 9, 14, 3, 13, 8 ]
    let P = [ 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2 ]
    let T = [ 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1 ]

    expect(solution(P, T, A, B)).toBe(false);
})


test("In a circle that can switch- 4", () => {
    let P = [ 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 2 ]
    let T = [ 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 2 ]
    let A = [ 12, 16, 2, 6, 0, 22, 24, 9, 13, 21, 3, 29, 14, 8, 23, 7, 8, 13, 21, 29, 0, 26, 25, 8, 11, 13, 2, 29, 8 ]
    let B = [ 28, 17, 21, 1, 20, 18, 13, 4, 17, 9, 20, 9, 21, 19, 7, 17, 9, 29, 5, 15, 27, 14, 0, 11, 28, 10, 1, 0, 18 ]

    expect(solution(P, T, A, B)).toBe(true);
})

test("In a circle that can switch- 5", () => {
    let P = [ 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2 ]
    let T = [ 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
    let A = [ 8, 3, 19, 9, 30, 2, 22, 29, 23, 0, 21, 8, 10, 21, 6, 31, 1, 34, 27, 20, 15, 22, 4, 33, 14, 8, 22, 18, 4, 22, 12, 6, 1, 17 ]
    let B = [ 5, 11, 10, 25, 23, 31, 21, 4, 24, 21, 11, 16, 27, 32, 7, 1, 13, 23, 28, 32, 22, 10, 33, 21, 33, 26, 23, 1, 25, 8, 22, 19, 7, 6 ]

    expect(solution(P, T, A, B)).toBe(true);
})

test("In a circle that can switch- every one can be linked to each other", () => {
    let P = [ 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1 ]
    let T = [ 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1 ]
    let A = [ 1, 19, 10, 26, 13, 0, 14, 28, 11, 3, 13, 6, 28, 3, 25, 24, 7, 4, 20, 13, 10, 25, 12, 18, 11, 2, 24, 24, 16, 18, 22, 21, 15, 17, 4, 0, 16, 9, 22, 1 ]
    let B = [ 9, 0, 16, 2, 25, 7, 21, 26, 21, 17, 14, 29, 21, 11, 8, 4, 10, 12, 24, 18, 22, 17, 2, 2, 6, 22, 27, 21, 28, 11, 14, 23, 17, 29, 21, 18, 9, 10, 9, 5 ]

    expect(solution(P, T, A, B)).toBe(true);
})


test("No one knows no one and people got wrong pet", () => {
    let A = []
    let B = []
    let P = [ 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2 ]
    let T = [ 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1 ]

    expect(solution(P, T, A, B)).toBe(false);
})

test("No one knows no one everyone got right pet", () => {
    let A = []
    let B = []
    let P = [ 2, 1, 1, 2]
    let T = [ 2, 1, 1, 2]

    expect(solution(P, T, A, B)).toBe(true);
})
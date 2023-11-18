const exo2Test = require('./exo2.js');

describe("Exo2 tests", () => {
    test('the first element of [1,3,4,5,5,6] is', () => {
        var result = exo2Test.first([1,2,3,4,5,6])
        expect(result).toBe(1);
    });

    test('the last element of [1,3,4,5,56] is 56', () => {
        var result = exo2Test.last([1,2,3,4,5,6])
        expect(result).toBe(6);
    });

    test('the last element of [1,3,4,5,56] is 56', () => {
        var result = exo2Test.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
        expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });


    test('the manupilation of colors', () => {
        var result = exo2Test.manipulateColors(["Red", "Green", "White", "Black"])
        expect(result).toStrictEqual(["Red,Green,White,Black", "Red,Green,White,Black", "RedGreenWhiteBlack"]);
    });
    })
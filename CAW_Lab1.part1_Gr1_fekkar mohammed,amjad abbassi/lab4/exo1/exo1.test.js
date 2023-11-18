const exo1Test = require('./exo1.js');

describe("Exo1 tests", () => {
    test('calls the side effect callback, n times, and returns the repeated string', () => {
        const sideEffectCallback = jest.fn();
        const result = exo1Test.exf('hello world', 1, sideEffectCallback);
        setTimeout(() => {
            expect(sideEffectCallback).toHaveBeenCalledTimes(1);
            expect(sideEffectCallback).toHaveBeenCalledWith('hello world');
            expect(result).toBe('hello world');
        }, 0);
    });
    test('the average of array numbers is', () => {
        var result = exo1Test.mean([1,2,3,4,5,6])
        expect(result).toBe(3.5);
    });
})
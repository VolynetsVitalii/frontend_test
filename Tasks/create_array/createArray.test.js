// Import function
const createArray = require('./createArray');

// Tests
describe('Create Array', () => {
    test('Function createArray should be declared', () => {
        expect(createArray).toBeDefined();
    });
    test('Function createArray should return an array', () => {
        expect(Array.isArray(createArray())).toBe(true);
    });
    test('Function createArray should return [1] if N = 1', () => {
        const N = 1;
        expect(createArray(N)).toEqual([1]);
    });
    test('Function createArray should return [1,2,3,4] if N = 4', () => {
        const N = 4;
        expect(createArray(N)).toEqual([1, 2, 3, 4]);
    });
    test('Function createArray should return [1,2,3,4,5,6,7,8,9,10] if N = 10', () => {
        const N = 10;
        expect(createArray(N)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test('Function createArray should return an empty array if N = 0', () => {
        const N = 0;
        expect(createArray(N)).toEqual([]);
    })
});
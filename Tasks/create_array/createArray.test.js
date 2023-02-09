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
});
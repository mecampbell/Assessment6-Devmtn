const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const expected = ['Michael', 'Cayenne', 'Lyla', 'Julien'];
    test("contain all the same items", () => {
        expect(shuffleArray(['Julien', 'Lyla', 'Cayenne', 'Michael'])).toEqual(expect.arrayContaining(expected));
    });
    test("returns an array", () => {
        expect(shuffleArray(expected)).toHaveLength(4);
    })
})
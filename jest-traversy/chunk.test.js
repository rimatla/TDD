const chunkArray = require('./chunk')

describe('Chunk', () => {
    test('chunk array function exists', () => {
        expect(chunkArray).toBeDefined()
    })

    test('chunk an array of 10 values with the width of 2', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const len = 2
        const chunkedArr = chunkArray(numbers, len) // save () into variable

        expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
    })

})


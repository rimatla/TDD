const reverseString = require('./reverseString')

describe('Reverse String', () => {
    it('reverseString() exists', () => {
        expect(reverseString).toBeDefined();
    })

    it('reverses string', () => {
        expect(reverseString('hello')).toEqual('olleh')
    })

    it('reverses string with UpperCase', () => {
        expect(reverseString('Hello')).toEqual('olleh')
    })
})
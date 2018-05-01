const functions = require('./functions');

describe('Functions', () => {

    // BEFORE EACH EXAMPLE
    const initDatabase = () => console.log('Database Initialized...')
    const closeDatabase = () => console.log('Database Closed...')

    // run before and after each test on this block
    beforeEach(() => initDatabase())
    afterEach(() => closeDatabase())


    describe('add()', () => {
        it('adds 2 + 2 = 4', () => {
            expect(functions.add(2, 2)).toBe(4)
        })

        it('Adds 2 + 2 != 5', () => {
            expect(functions.add(2, 2)).not.toBe(5)
        })
    })

    describe('isNull()', () => {
        it('should be null', () => {
            expect(functions.isNull()).toBeNull()
        })
    })

    describe('checkValue()', () => {
        it('should be falsy', () => {
            expect(functions.checkValue(null)).toBeFalsy()
        })
    })

    describe('createUser()', () => {
        it('user should be Joe Doe object', () => {
            expect(functions.createUser()).toEqual({ firstName: 'Joe', lastName: 'Doe' })
        })
    })
})

describe('REGEX', () => {
    test('there is no i in team', () => {
        expect('team').not.toMatch(/I/i)
    })
})

describe('Arrays', () => {
    test('Admin should be in usernames', () => {
        usernames = ['john', 'jack', 'jill', 'admin']
        expect(usernames).toContain('admin')
    })
})

// Async Code
describe('Async Data', () => {
    test('User fetched name should be Leanne Graham', () => {
        expect.assertions(1)
        return functions.fetchUser().then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
    })
})

// Async Await
describe('Async Await', () => {
    test('User fetched name should be Leanne Graham', async () => {
        expect.assertions(1)
        const data = await functions.fetchUser()
        expect(data.name).toEqual('Leanne Graham')
    })
})
const add = require('./add');
describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});

//config test environment to get rid of unnecessary objects from window, when  processing tests and allocating memory,
//console.log(window);

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});


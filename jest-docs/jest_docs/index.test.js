//********common matcher
test('two + two is four', () => {
    expect(2+2).toBe(4); //expectation + matcher ie: toBe
});

//********toBe uses Object.is to test EXACT equality. If you want to check the VALUE of an object, use toEqual instead:
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two: 2});
});

//********test the opposite of a matcher
test('the sum of numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

//********Truthiness
//To distinguish between undefined, null, and false, but not want to treat these differently.
//Jest contains helpers that let you be explicit about what you want.
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//comparing numbers w/ matcher equivalents
test('two plus two', () =>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    //toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

//for floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); //causes a rounding error
    expect(value).toBeCloseTo(0.3);
});

//********Strings
//check strings against regular expressions with toMatch:
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

//********Arrays
// check if an array contains a particular item using toContain:
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
});


const orderTotal = require('./order-total');

//write jest

//test 1
it('works', () => {
    expect(1).toBe(1);
});

//test 2
it('Check fail: Quantity', () => {
    expect(orderTotal({
        items: [
            { name: 'Cat Collar', price: 2, quantity: 3}
        ]
    })).toBe(6);
});

//test 3
it('Check fail: No Quantity specified', () => {
    expect(orderTotal({
        items: [
            { name: 'Cat Food', price: 3}
        ]
    })).toBe(3);
});

//test 4
it('Check fail: Do it again (Example 1)', () => {
    expect(orderTotal({
        items: [
            { name: 'Cat Food', price: 8, quantity: 1},
            { name: 'Dog Food', price: 800, quantity: 1}
        ]
    })).toBe(808);
});

//test 5
it('Check fail: Do it again (Example 2)', () => {
    expect(orderTotal({
        items: [
            { name: 'Cat Food', price: 8, quantity: 1},
            { name: 'Dog Food', price: 800, quantity: 1}
        ]
    })).toBe(808);
});

/* test 2
if (orderTotal({
        items: [
            { name: 'Cat Collar', price: 2, quantity: 3}
        ]
    }) !== 6) {
    throw new Error('Check fail: Quantity')
}
*/

/* test 3
if (orderTotal({
        items: [
            { name: 'Cat Collar', price: 3}
        ]
    }) !== 3) {
    throw new Error('Check fail: No Quantity specified')
}
*/

/* test 4
if (orderTotal({
        items: [
            { name: 'Cat Food', price: 8, quantity: 1},
            { name: 'Dog Food', price: 800, quantity: 1}
        ]
    }) !== 808) {
    throw new Error('Check fail: Do it again (Example 1)')
}
*/

/* test 5
if (orderTotal({
        items: [
            { name: 'Cat toy', price: 20, quantity: 1},
            { name: 'Dog toy', price: 40, quantity: 1}
        ]
    }) !== 60) {
    throw new Error('Check fail: Do it again (Example 2)')
}
*/
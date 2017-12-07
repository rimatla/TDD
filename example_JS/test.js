
function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

if (orderTotal({
        items: [
            { name: 'Cat Collar', price: 2, quantity: 3}
        ]
    }) !== 6) {
    throw new Error('Check fail: Quantity')
}

if (orderTotal({
        items: [
            { name: 'Cat Collar', price: 3}
        ]
    }) !== 3) {
    throw new Error('Check fail: No Quantity specified')
}

if (orderTotal({
        items: [
            { name: 'Cat Food', price: 8, quantity: 1},
            { name: 'Dog Food', price: 800, quantity: 1}
        ]
    }) !== 808) {
    throw new Error('Check fail: Do it again (Example 1)')
}

if (orderTotal({
        items: [
            { name: 'Cat toy', price: 20, quantity: 1},
            { name: 'Dog toy', price: 40, quantity: 1}
        ]
    }) !== 60) {
    throw new Error('Check fail: Do it again (Example 2)')
}

console.log(orderTotal);
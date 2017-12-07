const someOrder = {
    items: [
        {
            name: 'Cat Food',
            price: 8,
            quantity: 8
        },
        {   name: 'Dog Food',
            price: 800,
            quantity: 2
        },
        {
            name: 'Shipping',
            price: 40,
            shipping: true
        }
    ]
};

//calculate orders
const orderTotal = order => {
    const totalItems = order.items
        .filter(x => !x.shipping)
        .reduce((prev, cur) => prev + (cur.price  * cur.quantity), 0);

    const shippingItem = order.items.find(x => x.shipping);
    const shipping =  totalItems > 1000 ? 0 : shippingItem.price;
    return totalItems + shipping;
};

result = orderTotal(someOrder);
console.log(result); // -> 1664
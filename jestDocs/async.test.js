//******** Testing Asynchronous Code *************//

//*************Callbacks
//use a single argument called 'done'. Jest will wait until the done callback is called before finishing the test.
test('the data is peanut butter', (done) => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        //If done() is never called, the test will fail, which is what you want to happen.
        done();
    }
    fetchData(callback())
});

//*************Promises
test('the data is peanut butter', () => {
    //verifies that a certain number of assertions are called during a test.
    expect.assertions(1);
    //return the promise - if you omit this return statement,
    //test will complete before fetchData completes.
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

//use the .catch() if you expect a promise to be rejected
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});

//*************resolves/rejects
//You can also use the .resolves matcher in your expect statement,
//Jest will wait for that promise to resolve.
//If the promise is rejected, the test will automatically fail.
test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
});

//same thought process happens to .resolves
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchData()).rejects.toMatch('error');
});

//*************Async/Await
//Alternatively, you can use async and await in your tests
// ie: the same fetchData scenario can be tested with:
test('†he data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('†he fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

// you can combine async and await with .resolves or .rejects
test('the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await expect(fetchData()).rejects.toMatch('error');
});
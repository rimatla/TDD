/*
- Often while writing tests you have:
some setup work that needs to happen BEFORE tests run,
and you have some finishing work that needs to happen AFTER tests run. \
- Jest provides helper functions to handle this.
 */

//If you have some work you need to do repeatedly for many tests, you can use 'beforeEach' and 'afterEach'.

/*
let's say that several tests interact with a database of cities.
 */

//You have a method initializeCityDatabase() that must be called BEFORE each of these tests,
beforeEach(() => {
    initializeCityDatabase();
});

//and a method clearCityDatabase() that must be called AFTER each of these tests. You can do this with:
afterEach(() => {
    clearCityDatabase();
});

//run tests
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

//beforeEach and afterEach can also handle asynchronous code
//they can either take a 'done' parameter or 'return a promise'.
//ie: if initializeCityDatabase() returned a promise that resolved when the database was initialized,
//we would want to return that promise:
beforeEach(() => {
    return initializeCityDatabase();
});


//***beforeAll and afterAll
//if both initializeCityDatabase and clearCityDatabase returned promises,
//and the city database could be reused between tests, we could change our test code to:
beforeAll(() => {
    return initializeCityDatabase();
});

afterAll(() => {
    return clearCityDatabase();
});

//run test
test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});



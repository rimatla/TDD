/*
- By default, the before and after blocks apply to every test in a file.
- You can group tests together using a describe block.
- When inside a describe block:
    the before and after blocks only apply to the tests within that describe block.
 */

//ie: we have a city database, but also a food database.
// We could do different setup for different tests:

// Applies to all tests in this file
beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

//describe
describe('matching cities to food', () => {
    //Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});

//*****In Jest it's simple to run only one test - just temporarily change that test command to a test.only:
test.only('this will be the only test that runs', () => {
    expect(true).toBe(false);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});
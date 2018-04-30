//********************************   Variable Hoisting game
describe('Function Exercises', () => {
    let ACTUAL;
    //resets the value of ACTUAL (to null) before each test is run
    beforeEach(() => {
        ACTUAL = null;
    });

    //local scope
    test('A function has access to its own local scope variables', () => {
        let fn = () => {
            let name = 'inner';
            ACTUAL = name;
        };
        fn();
        expect(ACTUAL === 'inner').toBeTruthy();
    });

    //Arguments
    test('Arguments to a function are treated as local scope variables', () =>{
        let fn = (name) => {
            ACTUAL = name;
        };
        fn('inner');
        expect(ACTUAL === 'inner').toBeTruthy();
    });

    //Closure Context
    //ps: 'it' is a alias for 'test'
    it('a function has access to the variables contained within the same scope that function was created in', () =>{
        let name = 'outer';
        //closure
        let fn = () => {
            ACTUAL = name;
        };
        fn();
        expect(ACTUAL === 'outer').toBeTruthy();
    });

    //Local Scope
    test('a function\'s local scope variables are not available anywhere outside that function', () => {
        let firstFn = () => {
            let localToFirstFn = 'inner';
        };
        firstFn();
        expect(()=> {
            ACTUAL = localToFirstFn;
        }).toThrow();
        expect(ACTUAL === null).toBeTruthy(); //value of ACTUAL was never changed, rather stayed as initialized on top of this file
    });

    //+ Local Scope
    test('a function\'s local scope variables are not available anywhere outside that function, REGARDLESS of the context it\'s called in', () => {
        let firstFn = () => {
            let localToFirstFn = 'first';
            //Although false, it might seem reasonable to think that the secondFn
            //(which mentions the localToFirstFn variable), should have access to the localToFirstFn variable,
            //since it's being called here from within the scope where that variable is declared.
            secondFn();
        };
        let secondFn = () => {
            ACTUAL =  localToFirstFn;
        };

        //of course, calling the secondFn should throw an error in this case,
        //since secondFn does not have access to the localToFirstFn variable
        expect(() => {
            secondFn();
        }).toThrow();

        //in addition, calling the firstFn (which in turn calls the secondFn)
        //should also throw,
        //since it the calling context of secondFn has no influence over its scope access rules
        expect(() => {
            firstFn();
        }).toThrow();

        expect(ACTUAL === null).toBeTruthy();
    });

    //Inner and Outer
    test('if an inner and an outer variable share the SAME NAME, and the name is REFERENCED in the inner scope, the INNER scope variable MASKS the variable from the outer scope with the same name. This renders the OUTER scope variables INACCESSIBLE from anywhere within the inner function block',() => {
        let sameName = 'outer';
        let fn = () => {
            let sameName = 'inner';
            ACTUAL = sameName;
        };
        fn();
        expect(ACTUAL === 'inner').toBeTruthy();
    });

    test('if an inner and an outer variable share the same name, and the name is REFERENCED in the OUTER scope, the outer value binding will be used',() => {
        let sameName = 'outer';
        let fn = function () {
            let sameName = 'inner';
        };
        fn();
        ACTUAL = sameName; //outer
        expect(ACTUAL === 'outer').toBeTruthy();
    });

    //New Variables
    test('a new variable scope is created for every CALL to a function, as exemplified with a counter',() => {
        let fn = () => {
            //the `||` symbol here is being used to set a default value for innerCounter.
            //If innerCounter already contains a truthy value, then the value in that variable will be unchanged.
            //If it is falsey however (such as if it were completely uninitialized), then this line will set it to the default value of 10.

            //temporal dead zone
            //let innerCounter = innerCounter || 10;
            var innerCounter = innerCounter || 10;
            innerCounter = innerCounter + 1;
            ACTUAL = innerCounter;
        };
        //first call
        fn();
        expect(ACTUAL === 11).toBeTruthy();
        //second call
        fn();
        expect(ACTUAL === 11).toBeTruthy();
    });

    //Closure with diff variable names
    test('an inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names', () => {
        let outerName = 'outer';

        let fn = () => {
            let innerName = 'inner';
            ACTUAL = innerName + outerName;
        };
        fn();
        expect(ACTUAL === 'innerouter').toBeTruthy();
    });

    //Closure w/ multiple calls
    it('between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between calls to the inner function.', () => {
        let outerCounter = 10;

        let fn = () => {
            outerCounter = outerCounter + 1;
            ACTUAL = outerCounter;
        };
        fn();
        expect(ACTUAL === 11).toBeTruthy();
        fn();
        expect(ACTUAL === 12).toBeTruthy();
    });
}); //describe
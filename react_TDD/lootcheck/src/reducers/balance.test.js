import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    describe('when initializing', () => {
        const balance = 10;
        it('sets a balance', () => {
            //prev state = undefined
            expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
        });
        //cookies
        describe('then re-initializing', () => {
            it('it reads the balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance) //equal the prev balance in the above test
            });
        });
    });



    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit);
    });

    it('Withdraws from the balance', () => {
        const withdrawal = 10;
        const initialState = 20;

        expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdrawal})).toEqual(initialState - withdrawal);
    });
});
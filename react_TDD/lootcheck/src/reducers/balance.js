import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';
const balance = (state = 0, action) => { //default parameter, if state is undefined set it to 0
    let balance;

    switch (action.type) {
        case constants.SET_BALANCE:
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdrawal;
            break;
        default:
            //read cookie takes a string as a argument which identifies what cookie we want to read
            balance = parseInt(read_cookie(BALANCE_COOKIE, 10))  || state;
    }
    //bake cookie takes a string as a argument which identifies what cookie we want to bake
    bake_cookie(BALANCE_COOKIE, balance);
    return balance;
};

export default balance;


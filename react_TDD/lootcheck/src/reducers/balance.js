import * as constants from '../actions/constants';

const balance = (state = 0, action) => { //default parameter, if state is undefined set it to 0
    switch (action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            return state + action.deposit;
        case constants.WITHDRAW:
            return state - action.withdrawal;
        default:
            return state;
    }
};

export default balance;
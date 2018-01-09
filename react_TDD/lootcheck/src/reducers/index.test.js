//combines multiple reducers into one root reducer
import rootReducer from './index';

describe('rootReducer', () => {
    it('initializes the default state', () => {
        //rootReducer => (initial state + incoming action)
        expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}});
    })
});


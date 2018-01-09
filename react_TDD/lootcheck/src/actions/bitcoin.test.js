//Bitcoin endpoint https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
//middleware allows us to return more than just plain objects rather we can return functions and promises
import thunk from 'redux-thunk';
import fectchMock from 'fetch-mock'; //mock http request
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {}});
const mockResponse = { body: {bpi: 'bitcoin price index'}};

fectchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('creates an async action to fetch the bitcoin value', () => {
    const expectedActions = [ { bitcoin: mockResponse.body, type: FETCH_BITCOIN}];

    //in order for the it block successfully execute the asynchronous code, return the promise
    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    })
});
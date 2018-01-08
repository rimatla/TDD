import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';
import {withdraw} from '../actions/balance'; //import the un-connected Wallet

describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw};
    const wallet = shallow(<Wallet {...props}/>);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    //make sure than an input field exists
    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('When the user types into the wallet input', () => {
        const userBalance = '25'; //js process input data as string
        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', {target: {value: userBalance}});
        });

        it('updates the local balance in `state` and converts it to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10)); //decimal system
        });

        describe('and the user wants to make a deposit', () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click')
            });

            it('dispatches the `deposit()` it receives from props w/ the local balance', () => {
                //check that function was called
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        });

        describe('and the user wants to make a withdraw', () => {
            beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

            it('dispatches the `withdraw()` it receives from props w/ the local balance', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        });

    });

});
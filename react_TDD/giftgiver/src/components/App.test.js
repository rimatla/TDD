import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

//shallow: helper mock function from enzyme
const app = shallow(<App />);

//group tests together
describe('App', () => {
    //checks that App component renders correctly
    it('renders correctly', () => {
        expect(app).toMatchSnapshot(); //snap shots keep a recording history of React components
    });

    //make sure state exists
    it('initializes the `state` with an empty lists of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('When clicking the `addGift` button', () => {
        //allow to add new features
        it('adds a new gift to `state` when clicking the `add gift` button', () => {
            //find button and click it
            app.find('.btn-add').simulate('click');
            expect(app.state().gifts).toEqual([{id: 1}]);
        });

        //adds new gifts to the list when clicking the addGift button
        it('adds a new gift to view render list when clicking the addGift button', () => {
            app.find('.btn-add').simulate('click');
            //look up its child nodes
            expect(app.find('.gift-list').children().length).toEqual(2); //prevent test pollution from test above this one
        });
    });

}); //describe App

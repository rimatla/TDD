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
        const id = 1;
        //fires a code individually before each following test within this describe block
        beforeEach(() => {
            //find button and click it
            app.find('.btn-add').simulate('click'); //removed duplicates from tests bellow
        });

        //make sure each test starts with a clean slate and is not polluted
        afterEach(() => {
            //reverse the effects of before each
            //prevent test pollution from within both tests
            app.setState({gifts: []}); //enzyme feature
        });

        //allow to add new features
        it('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{id}]);
        });

        //adds new gifts to the list when clicking the addGift button
        it('adds a new gift to view rendered list', () => {
            //look up its child nodes
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        //Wire Gift component to App
        it('creates a Gift Component', () => {
            //true or false boolean
            expect(app.find('Gift').exists()).toBe(true);
        });
    }); //describe addGift()

    //remove a gift
    describe('user wants to remove the added gift', () => {
        const id = 1;
        beforeEach(() => {
            app.instance().removeGift(id);
        });

        it('removes the gift from `state`', () => {
            expect(app.state().gifts).toEqual([])
        });
    });

}); //describe App

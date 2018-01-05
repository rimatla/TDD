import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: {id}, removeGift: mockRemove};
    //pass in props
    const gift = shallow(<Gift {...props}/>);
    //render
    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    //make sure that both a person and a present is initialized on state
    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''});
    });

    //user types into an input
    describe('when typing into the person input', () => {
        const person = 'Uncle';
        beforeEach(() => {
            gift.find('.input-person').simulate('change', {target: {value:person}}); //simulate user event
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        })
    });//describe

    describe('when typing into the present input', () => {
        const present = 'Golf Clubs';
        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target: {value:present}}); //simulate user event
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    }); //describe

    describe('when clicking the `remove gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback', () => {
            //jest mock functions
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    });

}); //describe



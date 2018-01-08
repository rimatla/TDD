import { max_number } from './index';
describe('max_number', () => {
    describe('given an empty array', () => {
        it('it returns zero for an empty array', () => {
            expect(max_number([])).toEqual(0);
        })
    });

    describe('given an array of numbers', () => {
        it('returns the max number', () => {
            expect(max_number([1,2,3])).toEqual(3);
        })
    })
});
'use strict';

var main = require('../src/main');

describe('main', function () {

    it('should return a correct totalScore1', function () {
        var input = '--|--|--|--|--|--|--|--|--|--||';
        expect(main(input)).toBe(0);
    });

    it('should return a correct totalScore2', function () {
        var input = 'X|X|X|X|X|X|X|X|X|X||XX';
        expect(main(input)).toBe(300);
    });

    it('should return a correct totalScore3', function () {
        var input = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||';
        expect(main(input)).toBe(90);
    });

    it('should return a correct totalScore4', function () {
        var input = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';
        expect(main(input)).toBe(150);
    });

    it('should return a correct totalScore5', function () {
        var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
        expect(main(input)).toBe(167);
    });
});
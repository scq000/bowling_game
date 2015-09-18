'use strict';

var Frame = require('../src/frame');

describe('Frame', function () {

    it('should have a two properties called ball1 and ball2', function () {
        var frame = new Frame(1, 2);
        expect(frame.ball1).toBe(1);
        expect(frame.ball2).toBe(2);
    });

    describe('#isStrike()', function () {
        it('should return true when frame is strike', function () {
            var frame = new Frame(10, 0);
            expect(frame.isStrike()).toBeTruthy();
        });

        it('should return false when frame is not strike', function () {
            var frame = new Frame(1, 2);
            expect(frame.isStrike()).toBeFalsy();
        });
    });

    describe('#isSpare()', function () {

        it('should return true when frame is spare', function () {
            var frame = new Frame(4, 6);
            expect(frame.isSpare()).toBeTruthy();
        });

        it('should return false when frame is not spare', function () {
            var frame = new Frame(4, 3);
            expect(frame.isSpare()).toBeFalsy();
        });
    });
});
'use strict';

var Calculator = require('../src/calculator');
var Frame = require('../src/frame');

describe('Calculator', function () {

    describe('#getTotalScore(frames)', function () {

        it('should return a correct score when no pins knocked down', function () {
            var calculator = new Calculator();
            var frames = [new Frame(0, 0), new Frame(0, 0), new Frame(0, 0), new Frame(0, 0),
                new Frame(0, 0), new Frame(0, 0), new Frame(0, 0), new Frame(0, 0),
                new Frame(0, 0), new Frame(0, 0), new Frame(0, 0)
            ];
            expect(calculator.getTotalScore(frames)).toBe(0);
        });

        it('should return a correct score when all frames are strike', function () {
            var calculator = new Calculator();
            var frames = [new Frame(10, 0), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0),
                new Frame(10, 0), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0),
                new Frame(10, 0), new Frame(10, 0), new Frame(10, 10)
            ];
            expect(calculator.getTotalScore(frames)).toBe(300);
        });

        it('should return a correct score when all frames are spare', function () {
            var calculator = new Calculator();
            var frames = [new Frame(5, 5), new Frame(5, 5), new Frame(5, 5), new Frame(5, 5),
                new Frame(5, 5), new Frame(5, 5), new Frame(5, 5), new Frame(5, 5),
                new Frame(5, 5), new Frame(5, 5), new Frame(5, 0)
            ];
            expect(calculator.getTotalScore(frames)).toBe(150);
        });

        it('should return a correct score when all second balls are missed', function () {
            var calculator = new Calculator();
            var frames = [new Frame(9, 0), new Frame(9, 0), new Frame(9, 0), new Frame(9, 0),
                new Frame(9, 0), new Frame(9, 0), new Frame(9, 0), new Frame(9, 0),
                new Frame(9, 0), new Frame(9, 0), new Frame(0, 0)
            ];
            expect(calculator.getTotalScore(frames)).toBe(90);
        });

        it('should return a correct score when a mixed condition', function () {
            var calculator = new Calculator();
            var frames = [new Frame(10, 0), new Frame(7, 3), new Frame(9, 0), new Frame(10, 0),
                new Frame(0, 8), new Frame(8, 2), new Frame(0, 6), new Frame(10, 0),
                new Frame(10, 0), new Frame(10, 0), new Frame(8, 1)
            ];
            expect(calculator.getTotalScore(frames)).toBe(167);
        });

    });
});
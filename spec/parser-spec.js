'use strict';

var Frame = require('../src/frame');
var Parser = require('../src/parser');

describe('Parser', function () {

    describe('#createFrame(tag)', function () {

        it('should return a strike frame when the tag is X', function () {
            var parser = new Parser();
            var frame = parser.createFrame('X');
            expect(frame).toEqual(new Frame(10, 0));
        });

        it('should return a spare frame when the tag includes /', function () {
            var parser = new Parser();
            var frame = parser.createFrame('5/');
            expect(frame).toEqual(new Frame(5, 5));
        });

        it('should return a regular frame when the tag includes -', function () {
            var parser = new Parser();
            var frame = parser.createFrame('-4');
            expect(frame).toEqual(new Frame(0, 4));
        });

        it('should return a regular frame when the tag includes two numbers', function () {
            var parser = new Parser();
            var frame = parser.createFrame('43');
            expect(frame).toEqual(new Frame(4, 3));
        });
    });
});
'use strict';

var _ = require('lodash');
var Frame = require('./frame');

function Parser() {}

Parser.prototype.createFrame = function (tag) {
    var ball1 = this.format(tag[0]);
    if (tag[1] === '/') {
        return new Frame(ball1, 10 - ball1);
    } else {
        var ball2 = this.format(tag[1]);
        return new Frame(ball1, ball2);
    }
};

Parser.prototype.format = function (char) {
    return char === 'X' ? 10 : parseInt(char) || 0;
};

module.exports = Parser;
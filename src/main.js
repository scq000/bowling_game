'use strict';

var Parser = require('./parser');
var Calculator = require('./calculator');

module.exports = function (input) {
    var frameTags = input.split('||')[0];
    var bonusTag = input.split('||')[1];

    var parser = new Parser();
    var frames = [];

    frameTags.split('|').forEach(function (frameTag) {
        frames.push(parser.createFrame(frameTag));
    });

    frames.push(parser.createFrame(bonusTag));

    return new Calculator().getTotalScore(frames);
};

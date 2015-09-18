'use strict';

var Frame = require('./frame');

function Calculator() {
}

Calculator.prototype.getTotalScore = function (frames) {
    var totalScore = 0;

    frames.forEach(function (frame, i) {

        if (i === 10) {
            return false;
        } else if (frame.isStrike()) {
            totalScore += 10 + frames[i + 1].ball1 + (frames[i + 1].ball2 || frames[i + 2].ball1 || 0);
        } else if (frame.isSpare()) {
            totalScore += 10 + frames[i + 1].ball1;
        } else {
            totalScore += frame.ball1 + frame.ball2;
        }
    });

    return totalScore;
};

module.exports = Calculator;
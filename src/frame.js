'use strict';

function Frame(ball1, ball2) {
    this.ball1 = ball1;
    this.ball2 = ball2;
}

Frame.prototype.isStrike = function () {
    return this.ball1 === 10 && this.ball2 === 0;
};

Frame.prototype.isSpare = function () {
    return this.ball1 + this.ball2 === 10;
};

module.exports = Frame;

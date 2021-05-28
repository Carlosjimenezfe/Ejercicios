"use strict";
module.exports = function(game) {
	if (game.some(n => 0 > n || n > 10)) {
		throw new Error("Pins must have a value from 0 to 10");
	}
	let [score, ball, frame] = [0, 0, 10];
	const pins = x => game[ball + x];
	const sum = (x = 0) => pins(x) + pins(x + 1);
	while (frame) {
		const strike = pins(0) === 10;
		frame -= 1;
		if (!frame && strike && pins(1) !== 10 && sum(1) > 10 || !strike && sum() > 10) {
			throw new Error("Pin count exceeds pins on the lane");
		}
		if (!frame && sum() < 10 && pins(2) !== undefined) {
			throw new Error("Should not be able to roll after game is over");
		}
		score += sum() + (strike || sum() === 10 ? pins(2) : 0);
		ball += !strike + 1;
	}
	if (isNaN(score)) {
		throw new Error("Score cannot be taken until the end of the game");
	}
	return {score: () => score};
}
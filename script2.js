// GIVEN I am taking a code quiz

// WHEN I click the start button
//   THEN a timer starts and I am presented with a question
// WHEN I answer a question
//   THEN I am presented with another question
// WHEN I answer a question incorrectly
//   THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
//   THEN the game is over
// WHEN the game is over
//   THEN I can save my initials and score

// make a button with a timer

//var go here
var timerEl = document.getElementById("timer");
var button = document.getElementById("button");
//fucntions go here
// timer goes here
//on clicks go here
button.addEventListener("click", function () {
	var poop = setInterval(function () {
		secondsLeft--;
		timerEl.textContent = "time remaining " + secondsLeft;
		if (secondsLeft === 0) {
			clearInterval(poop);
		}
	}, 1000);
});
//logic

// make the timer work on click

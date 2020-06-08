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

//all variables will go here

var timerEl = document.getElementById("timer");
var finalScore = document.getElementById("final");
// var cardText = document.querySelector(".card-text");
var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
var score = document.getElementById("score");
var secondsLeft = 120;
var start = document.getElementById("start");
// var questions = ["quest1", "quest2", "quest3", "quest4"];
// var userAnswers = [];
// var answers = ["answer1", "answer2", "answer3", "answer4"];
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var scoreEl = 0;
var questNum = 0;
var questArr = [
	(questObj1 = {
		question: "first question",
		answer1: true,
		answer2: ["answer1", "answer2", "answer3"],
	}),
	(questObj2 = {
		question: "second question",
		answer1: true,
		answer2: ["answer4", "answer5", "answer6"],
	}),
	{
		question: "third question",
		answer1: true,
		answer2: ["answer28", "answer29", "answer30"],
	},
	(questObj3 = {
		question: "forth question",
		answer1: true,
		answer2: ["answer7", "answer8", "answer9"],
	}),
	(questObj4 = {
		question: "fifth question",
		answer1: true,
		answer2: ["answer10", "answer11", "answer12"],
	}),
	(questObj5 = {
		question: "sixth question",
		answer1: true,
		answer2: ["answer13", "answer14", "answer15"],
	}),
	(questObj6 = {
		question: "seventh question",
		answer1: true,
		answer2: ["answer16", "answer17", "answer18"],
	}),
	(questObj7 = {
		question: "eigth question",
		answer1: true,
		answer2: ["answer19", "answer20", "answer21"],
	}),
	(questObj8 = {
		question: "ninth question",
		answer1: true,
		answer2: ["answer22", "answer23", "answer24"],
	}),
	(questObj9 = {
		question: "tenth question",
		answer1: true,
		answer2: ["answer25", "answer26", "answer27"],
	}),
];

//text content
start.textContent = "press start to begin";
btn1.textContent = "start";
// li1.textContent = "hello";
// li2.textContent = "world";
// li3.textContent = "pain";
// li4.textContent = "ouch";
// score.innerHTML = "change damnit";
// btn2.textContent = "";

//attributes
listEl.setAttribute("class", "col-sm btn btn-primary my-2");
li1.setAttribute("class", "col-sm btn btn-primary my-2 button");
li2.setAttribute("class", "col-sm btn btn-primary my-2 button");
li3.setAttribute("class", "col-sm btn btn-primary my-2 button");
li4.setAttribute("class", "col-sm btn btn-primary my-2 button");

// all  css and html influence go here

//all functions will go here
function timeStart() {
	var poop = setInterval(function () {
		secondsLeft--;
		timerEl.textContent = "time remaining " + secondsLeft;
		if (secondsLeft <= 0) {
			clearInterval(poop);
			alert("your score is " + scoreEl);
		}
	}, 1000);
}

function addQuestions() {
	// var questBtn = $("<button>");
	// questBtn.addClass("letter-button letter letter-button-color");

	// questBtn.attr("data-letter", letters[i]);

	// questBtn.text(letters[i]);

	// $("#buttons").append(questBtn);
	document.getElementById("generate").appendChild(listEl);
	listEl.appendChild(li1);
	listEl.appendChild(li2);
	listEl.appendChild(li3);
	listEl.appendChild(li4);
}
function loopQuestion(num) {
	// for (var i = 0; i < questArr.length; i++) {
	// console.log(i);
	// var result = "";
	// result = questArr[i];
	// console.log(result);
	// console.log(i);
	start.innerHTML = questArr[num].question;
	li1.innerHTML = questArr[num].answer1;
	li2.innerHTML = questArr[num].answer2[0];
	li3.innerHTML = questArr[num].answer2[1];
	li4.innerHTML = questArr[num].answer2[2];
	// return result;
}

function endGame() {
	console.log(finalScore);
	finalScore.style.display = "inline";
	// finalScore.setAttribute
	// ("style", "display: show;");
}
// function QuestionAssign() {
// 	//console.log(questArr[0].question);
// 	cheese.innerHTML = questArr[i].question;
// 	li1.innerHTML = questArr[i].answer1;
// 	li2.innerHTML = questArr[i].answer2;
// 	li3.innerHTML = questArr[i].answer3;
// 	li4.innerHTML = questArr[i].answer4;
// }

// all event listener will go here
btn1.addEventListener("click", function () {
	console.log("im working");
	timeStart();
	addQuestions();
	loopQuestion(questNum);
	console.log("34");

	// questNum++;
	// QuestionAssign();
	btn1.remove();

	$(".button").on("click", function () {
		console.log(this);
		if (questNum === 9) {
			endGame();
			return;
		} else if (this.innerHTML === "true") {
			scoreEl += 1;
			score.innerHTML = scoreEl;
		} else {
			secondsLeft -= 10;
		}

		questNum++;
		loopQuestion(questNum);
		console.log(questNum);
	});
});
// endGame();

// console.log(questArr[0].key[0]);
// console.log(result);
// loopQuestion();

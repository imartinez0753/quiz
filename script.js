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
var cardText = document.querySelector(".card-text");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var secondsLeft = 120;
var cheese = document.getElementById("start");
var questions = ["quest1", "quest2", "quest3", "quest4"];
var userAnswers = [];
var answers = ["answer1", "answer2", "answer3", "answer4"];
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var score = 0;
var questArr = [
	(questObj1 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj2 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj3 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj4 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj5 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj6 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj7 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj8 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj9 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
	(questObj10 = {
		question: "some question",
		answer1: true,
		answer2: false,
		answer3: false,
		answer4: false,
	}),
];
// console.log(questArr[0].question);

//text content
cheese.textContent = "press start to begin";
btn1.textContent = "start";
li1.textContent = "hello";
li2.textContent = "world";
li3.textContent = "pain";
li4.textContent = "ouch";
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
		if (secondsLeft === 0) {
			clearInterval(poop);
		}
	}, 1000);
}

function addQuestions() {
	// var questBtn = $("<button>");
	// questBtn.addClass("letter-button letter letter-button-color");

	// questBtn.attr("data-letter", letters[i]);

	// questBtn.text(letters[i]);

	// $("#buttons").append(questBtn);
	document.body.appendChild(listEl);
	listEl.appendChild(li1);
	listEl.appendChild(li2);
	listEl.appendChild(li3);
	listEl.appendChild(li4);
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
	timeStart();
	loopQuestion();
	addQuestions();
	// QuestionAssign();
	btn1.remove();
});

function loopQuestion() {
	for (var i = 0; i < questArr.length; i++) {
		var result = "";
		result = questArr[i];
		console.log(result);
		cheese.innerHTML = questArr[i].question;
		li1.innerHTML = questArr[i].answer1;
		li2.innerHTML = questArr[i].answer2;
		li3.innerHTML = questArr[i].answer3;
		li4.innerHTML = questArr[i].answer4;
		return result;
	}
}

// $(".button").on("click, funciton()");

listEl.addEventListener("click", function () {
	console.log("on your way");
		if (this. === true){
	score += 1
		}
		else{
			secondsLeft -= 10;
		}
	loopQuestion();
});

console.log(questArr[0].key[0]);
// console.log(result);
// loopQuestion();

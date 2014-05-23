$(document).ready(function() {
//Global Variables========================================
var correctScore = 0;
var questionCounter = 0;
//Questions Array=========================================

var questions = [
	{
		image: "picture1",
		question: "What are the words of House Stark?",
		answer1: "Growing Stronger",
		answer2: "Winter Is Coming",
		answer3: "We Do Not Sow",
		answer4: "Our's Is the Fury",
		correct: "Winter Is Coming"
	},

	{
		image: "picture2",
		question: "What is the name of ancestral Valyrian sword given to Jon Snow?",
		answer1: "Ice",
		answer2: "Longclaw",
		answer3: "Oathkeeper",
		answer4: "Tywin Lannister",
		correct: "Widow's Wail"
	},

	{
		image: "picture3",
		question: "Which King was commonly referred to as the 'Mad King'?",
		answer1: "Robert Baratheon",
		answer2: "Viserys Targaryen",
		answer3: "Aerys II Targaryen",
		answer4: "Tywin Lannister",
		correct: "Aerys II Targaryen"
	},

	{
		image: "picture4",
		question: "What is the southern-most region of Westeros?",
		answer1: "Dorne",
		answer2: "The Reach",
		answer3: "The Stormlands",
		answer4: "The Vale",
		correct: "Dorne"
	},

	{
		image: "picture5",
		question: "What is the impregnable castle located in the Vale called?",
		answer1: "The Dreadfort",
		answer2: "Castle Black",
		answer3: "The Red Keep",
		answer4: "The Eyrie",
		correct: "The Eyrie"
	},

	{
		image: "picture6",
		question: "Which is NOT one of the names of Daenerys Targaryen's dragons?",
		answer1: "Drogon",
		answer2: "Balerion",
		answer3: "Viserion",
		answer4: "Rhaegal",
		correct: "Balerion"
	},

	{
		image: "picture7",
		question: "What group is tasked with protecting Westeros from invasion beyond the Wall and the mythical 'White Walkers'?",
		answer1: "The Kingsguard",
		answer2: "The Second Sons",
		answer3: "The Night's Watch",
		answer4: "The City Watch",
		correct: "The Night's Watch"
	}
];

var kingdom = [
	$(".north"),
	$(".east"),
	$(".rock"),
	$(".riverlands"),
	$(".dorne"),
	$(".south"),
	$(".stormlands")
];

//Game Functions==========================================

function initQuestion(questions) {
	$(".quiz-container").addClass(questions.image);
	$(".question").text(questions.question);
	$(".answer1").val(questions.answer1);
	$(".answer2").val(questions.answer2);
	$(".answer3").val(questions.answer3);
	$(".answer4").val(questions.answer4);
}

function addKingdom() {
	var currentKingdom = kingdom[questionCounter];
	$(currentKingdom).show();
}

function checkAnswer() {
	var userChoice = $(".userChoice");
	var currentQuestion = questions[questionCounter];
	if(userChoice.length == 0) {
		alert("You must click on an answer before you can submit!");
		return false;
	}
	if(userChoice.val() == currentQuestion.correct) {
		$(".correct-overlay").fadeIn(500);
		$(".next-button").show();
		addKingdom();
		correctScore++;
	} else {
		$(".incorrect-overlay").fadeIn(500);
		$(".next-button").show();
		}
		questionCounter++;
}

function finishGame() {
		$(".answer").removeClass("userChoice");
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".quiz-container").addClass("picture8");
		$(".final-overlay").fadeIn(500);
		$(".question").hide();
		$(".question-count").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".next-button").hide();
		$(".score-container").hide();
		$(".finish-button").show();
		$(".correct-score").text(correctScore);
}

function nextQuestion() {
	if(questionCounter > questions.length - 1) {
		finishGame();
	} else {
		initQuestion(questions[questionCounter]);
	}
}

//***THE GAME*** Question 1 of 7 appears and the user can begin quiz starting with Question number 1 and possible answers showing.
	$("#start-button").click(function(e){
		e.preventDefault();
		$(".quiz-container").fadeIn(500);
		initQuestion(questions[questionCounter]);
	});
//allow user to highlight and store choice so they can submit it.===============================================
	$(".answer").click(function(e) {
		$(".answer").removeClass("userChoice");
		$(this).addClass("userChoice");
		$(".answer").css("background", "");
		$(this).css("background", "#00A615");
	});
//when user clicks submit button show whether the user's answer was correct or not and ALERT for empty answers========================================
	$(".submit").click(function(e){
		e.preventDefault();
		checkAnswer();
		$(".userChoice").removeClass("userChoice");
	});
//Question 2: When user presses next question bring up the next question in order and increase the question counter.
	$(".next-button").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		nextQuestion();
	});

//(FATE Screen/ResetButton) =============================
	$(".finish-button").click(function(e){
		e.preventDefault();
		if(correctScore <= 2) {
			$(".final-overlay").fadeOut(500);
			$(".finish-button").hide();
			$(".new").hide();
			$(".score-container").show();
			$(".next-button").show();
			$(".quiz-container").addClass("fate1");
			$(".moon-door").fadeIn(500);
		} else if(correctScore <= 4)  {
			$(".final-overlay").fadeOut(500);
			$(".finish-button").hide();
			$(".new").hide();
			$(".score-container").show();
			$(".next-button").show();
			$(".quiz-container").addClass("fate2");
			$(".nights-watch").fadeIn(500);
		} else if(correctScore <= 6)  {
			$(".final-overlay").fadeOut(500);
			$(".finish-button").hide();
			$(".new").hide();
		  $(".score-container").show();
		  $(".next-button").show();
			$(".quiz-container").addClass("fate3");
			$(".kingsguard").fadeIn(500);
		} else if(correctScore == 7)  {
			$(".final-overlay").fadeOut(500);
			$(".finish-button").hide();
			$(".new").hide();
			$(".score-container").show();
			$(".next-button").show();
			$(".quiz-container").addClass("fate4");
			$(".winner").fadeIn(500);
		}
	});

//(NEW GAME button) =================================
	$(".new").click(function(){
  window.location.reload();
	});

//(Instructions button)======================================
//Instructions- when clicked; display instruction modal box
	$(".what").click(function() {
		$(".instruction-overlay").fadeIn(500);

	});
	//Hide information modal box
	$(".close-button").click(function() {
		$(".instruction-overlay").fadeOut(500);
	});

});
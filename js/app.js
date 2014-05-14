$(document).ready(function() {
//Global Variables=====================================
var correctScore = 0;
var questionCounter = 0;
//(THE GAME) Question 1 of 7 appears and the user can begin quiz starting with Question number 1 and possible answers showing.
	$("#start-button").click(function(e){
		e.preventDefault();
		$(".quiz-container").fadeIn(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-one").show();
		$(".one").show();
		$(".submit1").show();
	});
//allow user to highlight and store choice so they can submit it.===============================================
	$(".answer").click(function(e) {
	$(".answer").removeClass("userChoice");
	$(this).addClass("userChoice");
	});
//when user clicks submit button show whether the user's answer was correct or not================================
	$(".submit1").click(function(e){
		var userInput = $(".userChoice");
		e.preventDefault();
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next1").show();
			$("#north").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next1").show();
		}
	});
//Question 2: When user presses next question bring up the next question in order and increase the question counter.
	$(".next1").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".quiz-container").addClass("picture2");
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-two").show();
		$(".two").show();
		$(".submit2").show();
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		questionCounter++;
	});

	$(".submit2").click(function(e){
		e.preventDefault();
		var userInput = $(".userChoice");
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next2").show();
			$("#east").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next2").show();
		}
	});

//Question 3: When user presses next question bring up the next question in order and increase the question counter.
	$(".next2").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-three").show();
		$(".three").show();
		$(".submit3").show();
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		questionCounter++;
	});

	$(".submit3").click(function(e){
		e.preventDefault();
		var userInput = $(".userChoice");
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next3").show();
			$("#rock").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next3").show();
		}
	});

//Question 4: When user presses next question bring up the next question in order and increase the question counter.
	$(".next3").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-four").show();
		$(".four").show();
		$(".submit4").show();
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		questionCounter++;
	});

	$(".submit4").click(function(e){
		e.preventDefault();
		var userInput = $(".userChoice");
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next4").show();
			$("#riverlands").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next4").show();
		}
	});

//Question 5: When user presses next question bring up the next question in order and increase the question counter.
	$(".next4").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-five").show();
		$(".five").show();
		$(".submit5").show();
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		questionCounter++;
	});

	$(".submit5").click(function(e){
		e.preventDefault();
		var userInput = $(".userChoice");
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next5").show();
			$("#dorne").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next5").show();
		}
	});

//Question 6: When user presses next question bring up the next question in order and increase the question counter.
	$(".next5").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-six").show();
		$(".six").show();
		$(".submit6").show();
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		questionCounter++;
	});

	$(".submit6").click(function(e){
		e.preventDefault();
		var userInput = $(".userChoice");
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next6").show();
			$("#south").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next6").show();
		}
	});

//Question 7: When user presses next question bring up the next question in order and increase the question counter.
	$(".next6").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".q-seven").show();
		$(".seven").show();
		$(".submit7").show();
		$('.counter').html(parseInt($('.counter').html(), 10)+1);
		questionCounter++;
	});

	$(".submit7").click(function(e){
		e.preventDefault();
		var userInput = $(".userChoice");
		if(userInput.hasClass("correct")) {
			$(".correct-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next7").show();
			$("#stormlands").show();
			correctScore++;
		} else {
			$(".incorrect-overlay").fadeIn(500);
			$(".next-button").hide();
			$(".next7").show();
		}
	});

//Final Tally: When user presses next question bring up the next question in order and increase the question counter.
	$(".next7").click(function(e) {
		e.preventDefault();
		$(".correct-overlay").fadeOut(500);
		$(".incorrect-overlay").fadeOut(500);
		$(".final-overlay").fadeIn(500);
		$(".question").hide();
		$(".choices").hide();
		$(".submit").hide();
		$(".next-button").hide();
		$(".finish-button").show();
	});

//(FATE Screen/ResetButton) =============================
	$(".finish-button").click(function(e){
		e.preventDefault();
		if(correctScore <= 3) {
			$(".quiz-container").fadeOut(500);
			$(".moon-door").fadeIn(500);
		} else if(correctScore > 3)  {
			$(".quiz-container").fadeOut(500);
			$(".nights-watch").fadeIn(500);
		} else if(correctScore > 6)  {
			$(".quiz-container").fadeOut(500);
			$(".kingsguard").fadeIn(500);
		} else if(correctScore == 10)  {
			$(".quiz-container").fadeOut(500);
			$(".winner").fadeIn(500);
		}
	});

//(NEW GAME button) =================================
//when clicked; start a new game by resetting the score and question count.  Generate a new random set of questions and reset screen back to first question and possible answers.

//(Instructions button)======================================
//Instructions- when clicked; display instruction modal box
	$(".what").click(function() {
		$(".overlay").fadeIn(500);
	});
	//Hide information modal box
	$(".close-button").click(function() {
		$(".overlay").fadeOut(500);
	});

});
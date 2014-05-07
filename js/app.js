$(document).ready(function() {
	//Global Variables===================================


//Question Array=======================================
var questions = [{
    question: "What are the words of House Stark?",
    choices: ["Growing Stronger", "We Do Not Sow", "Winter Is Coming", "Our's Is the Fury"],
    qNum : 0,
    correct : 3,
    fact: "In 2012 Brazil produced more than 5.6 billion pounds of coffee."

}];
	//(THE GAME)======================================== Question 1 of 7 appears and the user can begin quiz starting with Question number 1 and possible answers showing.
	$("#startButton").click(function(){
		$(".quiz-container").fadeIn(500);
		$(".start-screen").hide();
	});
//when choice is highlighted and submit is clicked
	//$("#submit").click(function(){
	//if() {}
	//});

	//(NEW GAME button) =================================
	//when clicked; start a new game by resetting the score and question count.  Generate a new random set of questions and reset screen back to first question and possible answers.

	//(Instructions button)======================================
	//Instructions- when clicked; display instruction modal box
	$(".what").click(function() {
		$(".overlay").fadeIn(1000);
	});
	//Hide information modal box
	$("a.close").click(function() {
		$(".overlay").fadeOut(1000);
	});

});
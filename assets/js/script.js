/*Variables*/
var currentQuestion = 0;
var score = 0;
var numQuestions = 5;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

/*Load questions*/
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

/*Load next question on answer select*/
function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	/*Score*/
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == 5){
		nextButton.textContent = 'Finish';
		window.location.assign('/assets/html/end-quiz.html');
	}

	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);




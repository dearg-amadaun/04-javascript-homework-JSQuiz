/*Variables*/
var currentQuestion = 0;
var score = 0;
var numQuestions = questions.length;

var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;	
    }

if(currentQuestion == numQuestions){
		h1.id.display = '0';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	
	}

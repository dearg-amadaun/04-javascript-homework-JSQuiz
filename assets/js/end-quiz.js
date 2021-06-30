/*Variables*/
var currentQuestion = 0;
var score = 0;
var numQuestions = questions.length;

var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 1;	
    }
/*need to figure out how to get the score counterr showing where it needs to show*/

if(currentQuestion == numQuestions){
		h1.id.display = '0';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	
	}

function Quiz() {
  this.quiz = [];
quiz[0] = new Question("What is 1/4 of 100?", "25", "24", "23");
quiz[1] = new Question("What color is blood?", "Red", "White", "Green");
quiz[2] = new Question("What color is grass?", "Green", "White", "Red");
quiz[3] = new Question("How many legs does a spider have?", "8", "6", "4");
quiz[4] = new Question("Who is the king of the Netherlands?", "Willem-Alexander", "Willem-Alexzelf", "Willem-Alexniemand");
quiz[5] = new Question("What is 2-2?", "0", "2", "4");
quiz[6] = new Question("What was Vincent van Gogh?", "Artist", "Baker", "Jobless");
quiz[7] = new Question("What is 1/4 of 100?", "25", "24", "23");
quiz[8] = new Question("What color is sky?", "blue", "White", "Green");
quiz[9] = new Question("What color is chorizo?", "red", "White", "Red");
quiz[10] = new Question("How many legs does a dog have?", "4", "6", "2");
quiz[11] = new Question("Who is the king of Spain?", "Felipe VI", "Willem-Alexzelf", "Willem-Alexniemand");
quiz[12] = new Question("What is 12-2?", "10", "2", "4");
quiz[13] = new Question("What was Picasso?", "Artist", "Baker", "Jobless");

var randomQuestion;
var answers = [];
var currentScore = 0;
var totalScore = 0;
var score = document.getElementById("score");

// document.addEventListener("DOMContentLoaded", function(event) { 
//   btnProvideQuestion();
// });

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};
console.log(quiz);
function shuffle(elem) {
	for(var j, x, i = elem.length; i; j = parseInt(Math.random() * i), x = elem[--i], elem[i] = elem[j], elem[j] = x);
	return elem;
};

function getRandomQuestionSet(number){
    var qSet = [];
    while(qSet.length < number){
        var randomIndex = Math.floor(Math.random()*this.quiz.length);
        if(qSet.indexOf(randomIndex) === -1){
          qSet.push(randomIndex)
        }
    }
    
    return quiz.filter(function(d,i){
      return qSet.indexOf(i) > -1;
    })
    
}

function btnProvideQuestion() { 
  var questionSet = getRandomQuestionSet(3);
console.log(questionSet)
var randomNumber = Math.floor(Math.random()*questionSet.length);
	randomQuestion = questionSet[randomNumber]; //getQuestion
console.log(randomQuestion.question);
	
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
 
}

document.getElementById("question").innerHTML= randomQuestion.question;
document.getElementById("answerA").value= answers[0];
document.getElementById("answerA").innerHTML= answers[0];
document.getElementById("answerB").value= answers[1];
document.getElementById("answerB").innerHTML= answers[1];
document.getElementById("answerC").value= answers[2];
document.getElementById("answerC").innerHTML= answers[2];

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
    totalScore++;
  } else {
    if (currentScore > 0) {
      totalScore++;
  	}
  }
  console.log(totalScore);
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
    document.getElementById("score").innerHTML = `Well done! ${currentScore} out of ${totalScore} questions correct!`;
  } else { 
      adjustScore(false);
      document.getElementById("score").innerHTML = `What a pity! ${currentScore} out of ${totalScore} questions, but not enough to win the battle`;
  }	  
}


};
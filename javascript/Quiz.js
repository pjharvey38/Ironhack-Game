

  
  var quiz = [];
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
quiz[14] = new Question("Si volvieras solo a casa por la noche y te encontraras con una mujer y notaras su miedo al sentirte, qué harías?", "Cambiar de acera y adelantarme para que me vea y así vaya más tranquila viendo que no le voy a hacer nada", "Decirle que tranquila, que no le voy a hacer nada", "Decirle guapa para que vea que la aprecio.");
quiz[14] = new Question("El ocho de marzo se celebra el día de la mujer trabajadora, sabes porqué se celebra ese día?", "ni idea, ni me importa ni creo que sea importante", "Porque ese día las mujeres de todo el mundo salieron a la calle por primera vez", "porque así lo decidió la Conferencia Internacional de Mujeres en 1910 a propuesta de Clara Zetkin, una activista alemana por los derechos de la mujer.");

var randomQuestion;
var answers = [];
var currentScore = 0;
var totalScore = 0;
var numBattles = 0;
var battlesWon = 0;
var score = document.getElementById("score");
var battlesPlayed = document.getElementById("battles-played");
var batllesWon = document.getElementById("battles-won");
var twoBattlesWon = document.getElementById("2-battlesWon");


document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function get(x) {
  return document.getElementById(x);
}

function shuffle(elem) {
	for(var j, x, i = elem.length; i; j = parseInt(Math.random() * i), x = elem[--i], elem[i] = elem[j], elem[j] = x);
	return elem;
};

function getRandomQuestionSet(number){
    var qSet = [];
    while(qSet.length < number){
        var randomIndex = Math.floor(Math.random()*quiz.length);
        if(qSet.indexOf(randomIndex) === -1){
          qSet.push(randomIndex)
        }
    }
    
    return quiz.filter(function(d,i){
      return qSet.indexOf(i) > -1;
    })
    
}
var questionSet = getRandomQuestionSet(14);
console.log(questionSet)

function btnProvideQuestion() { 

    var randomNumber = Math.floor(Math.random()*questionSet.length);
      randomQuestion = questionSet[randomNumber]; //getQuestion
        console.log(randomQuestion.question);
          answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
          shuffle(answers);
  
     get("question").innerHTML= randomQuestion.question;
     get("answerA").value= answers[0];
     get("answerA").innerHTML= answers[0];
     get("answerB").value= answers[1];
     get("answerB").innerHTML= answers[1];
     get("answerC").value= answers[2];
     get("answerC").innerHTML= answers[2];
 
};



function answerA_clicked() {
  var answerAValue = get("answerA").value;
    checkAnswer(answerAValue);
    changeScreen();
    countBattles(); 
    battlesWontotal()
}

function answerB_clicked() {
		var answerBValue = get("answerB").value;
  checkAnswer(answerBValue);
  changeScreen();
  countBattles(); 
  battlesWontotal()
}
function answerC_clicked() {
  var answerCValue = get("answerC").value;
    checkAnswer(answerCValue);
    changeScreen();
    countBattles(); 
    battlesWontotal()
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
    totalScore++;
  } else {
    if (currentScore >= 0) {
      totalScore++;
      currentScore+0;
  	}
  }
  console.log(totalScore);
  score.innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
    score.innerHTML = `Well done! ${currentScore} out of ${totalScore} questions correct!`;
  } else { 
      adjustScore(false);
      score.innerHTML = `What a pity! ${currentScore} out of ${totalScore} questions, but not enough to win the battle`;
      btnProvideQuestion() 
  }	  
}
function countBattles() {
  if (totalScore == 3) {
    numBattles++;
  } else if (totalScore == 6) {
    numBattles++;
    
  } else if (totalScore == 9){
    numBattles++;
  } 
  battlesPlayed.innerHTML = `Batallas jugadas: ${numBattles}`;
}
console.log(numBattles);
console.log(battlesWon);

function battlesWontotal() {
  if ((totalScore == 3) && (currentScore >= 2)) {
    battlesWon++;
  } else if ((totalScore == 6) && (currentScore >= 4)) {
    battlesWon++;
    twoBattlesWon.innerHTML = `Wow! Enhorabuena! Has ganado ya 2 batallas y por tanto la guerra! Si te apetece ve a por el tercero!`;
  } else if ((totalScore == 9) && (currentScore >= 6)) {
    battlesWon++;
  }
  batllesWon.innerHTML = `${battlesWon} batallas ganadas de ${numBattles} jugadas`;
};

function changeScreen() {
    if (totalScore == 3) {
      setMapScreen();
    } else if (totalScore == 6) {
      setMapScreen();
    } else if (totalScore == 9) {
     if(battlesWon >= 2) {
        setWinScreen();
      } else {
      setGameOver();
    }
  }}
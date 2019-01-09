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
quiz[15] = new Question("El ocho de marzo se celebra el día de la mujer trabajadora, sabes porqué se celebra ese día?", "ni idea, ni me importa ni creo que sea importante", "Porque ese día las mujeres de todo el mundo salieron a la calle por primera vez", "porque así lo decidió la Conferencia Internacional de Mujeres en 1910 a propuesta de Clara Zetkin, una activista alemana por los derechos de la mujer.");
quiz[16] = new Question("Cuando silbas a una chica por la calle, lo haces por...", "demostrar ante el resto de hombres lo hombre que soy", "porque soy un romántico empedernido y sé que a las mujeres les encanta", "un buen cumplido no le sienta mal a nadie, no?");
quiz[17] = new Question("Todas las mujeres son unas brujas!", "Para nada, si se pelean entre ellas es para ejercer algún tipo de poder en la sombra, es a lo que las ha acostumbrado el sistema patriarcal en el que hemos crecido", "por supuesto, todas las mujeres son unas brujas, solo se critican entre ellas y quieren casarse a la primera de cambio", "para bruja tu madre!");


var randomQuestion;
var answers = [];
var currentScore = 0;
var totalScore = 0;
var numBattles = 0;
var battlesWon = 0;
var score = document.getElementById("score");



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


function btnProvideQuestion() { 
  var questionSet = getRandomQuestionSet(3);
console.log(questionSet)

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



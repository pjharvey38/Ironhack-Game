var quiz = [];
quiz[0] = new Question("Si una mujer se queda embarazada de un hijo no deseado, ¿qué debe hacer?", "Si no quiere tenerlo, debe tener la libertad para decidir sobre su cuerpo.", "Pues que se aguante, que se hubiera cortado a tiempo, a lo hecho pecho!", "El aborto es un asesinato en toda regla de una vida humana, si no quiere tenerlo que lo de en adopción!");
quiz[1] = new Question("A los amigos que van emborrachando a chicas por los bares para poder aprovecharse de ellas, qué les diríais?", "Si está borracha, no es es sexo consentido, no es no y si no dice que sí, también es no!", "Bien hecho! Las tías no saben lo que quieren y hace falta un poco de ayuda para que se suelten.", "A ver, es que últimamente todo parece acoso, ella es mayorcita y sabe lo que se hace cuando se bebe las copas que se bebe.");
quiz[2] = new Question("Cuando acabáis la cena o la comida, ¿quién se levanta primero a recoger los platos?", "Es una tarea que repartimos al cincuenta por ciento, ¡por supuesto!", "La mujer siempre porque ya lo hace por intuición, esa intuición el hombre no la tiene.", "Pues casi siempre la mujer y ya la intento ayudar cuando puedo.");
quiz[3] = new Question("En la primera cita con una chica, ¿quién paga la cena?", "Lo dividimos equitativamente entre los dos, a no ser que alguno se pida un entrecot y otro solo una ensalada...", "Hombre, vaya pregunta! El hombre tiene que ser un caballero, por supuesto que paga.", "Pues si quiero tener más posibilidades esa noche, tendré que pagar yo.");
quiz[4] = new Question("¿Quién pone las lavadoras en tu casa?", "Depende de quien llegue antes, pero es algo que hacemos los dos.", "Los hombres es que no saben hacerlo nada bien, mejor que lo haga la mujer que tiene más delicadeza para esas cosas.", "A cada uno lo suyo, el hombre cuelga los cuadros y la mujer se encarga de las lavadoras, ¡faltaría más!");
quiz[5] = new Question("Si los niños se despiertan en mitad de la noche, ¿quién se levanta para cuidarlos?", "Nos vamos turnando, en función de quién lo ha hecho la noche anterior.", "La mujer siempre porque yo madrugo por la mañana y no puedo estar cansado.", "Ella sabe como calmarlo y yo no, así que siempre se levanta ella...");
quiz[6] = new Question("Si váis los dos en un coche, ¿quién conduce?", "Depende de quien le apetezca ese día, nos lo repartimos", "Todo el mundo sabe que las mujeres son un peligro al volante.", "Yo quiero que vaya tranquila y cómoda en el coche, así que siempre conduzco yo.");
quiz[7] = new Question("Si el niño se pone enfermo, ¿quién falta al trabajo para cuidarlo?", "Nos lo repartimos en función del trabajo que tengamos.", "Hombre, es que mi trabajo es más importante, así que suele ser ella la que se sacrifica.", "Es que si no lo hace ella, sufre en el trabajo, así que mejor la dejo que lo haga ella."); 
quiz[8] = new Question("¿Qué pasa si tu hijo juega con muñecas?", "Absolutamente nada, no hay juegos ni para niños ni para niñas, mientras se lo pase bien...", "Se la quito de las manos y le digo que eso es cosa de niñas y que mejor se vaya jugar al futbol con otros niños.", "¡Mi hijo nunca jugaría con una muñeca!");
quiz[9] = new Question("Si a tu hija le gusta jugar al fútbol y no hay manera de que se ponga un vestido, ¿qué harías?", "Pues animarla a que sea ella misma.", "Uy no, fútbol no, que acabará caminando como un hombre y así nadie querrá casarse con ella.", "¿Fútbol femenino?, de eso no hay donde vivo.");
quiz[10] = new Question("¿Crees que una mujer debe cobrar lo mismo que un hombre por desempeñar el mismo trabajo?", "Por supuesto, ambos podemos hacer las mismas tareas sin importar el sexo.", "Una mujer no siempre está preparada para realizar el mismo trabajo que un hombre.", "Ni de coñas, las mujeres no son capaces de gestionar bien el estrés.");
quiz[11] = new Question("¿Sabrías decirme de media cuantás mujeres ostentan cargos de poder?", "Pues creo que ronda el 30%, a todas luces insuficiente para alcanzar la plena igualdad", "Pues no tengo ni idea, pero no creo que sea importante, pero supongo que esto responde a los méritos de cada uno.", "Lo del techo de cristal es una bobada, si ellas no llegan es porque no quieren.");
quiz[12] = new Question("En una conversación sobre violencia de género, ¿qué opinas cuándo se habla sobre denuncias falsas?", "No me parece un argumento, ya que las cifras oficiales indican que no llegan ni al 1%.", "Representan un gran número y me parece indignante que solo se hable del maltrato hacia la mujer", "Los datos demuestran que tenemos que hablar de violencia intrafamiliar y no de violencia contra la mujer.");
quiz[13] = new Question("¿Sabrías decirme cuántas violaciones hay en este país?", "Según las estadísticas, una cada ocho horas, ¡una bestialidad!", "Seguro que ni la mitad de lo que indican los datos, ¡hoy en día no se puede hacer nada sin que una mujer te acuse de violación!", "Ni lo sé ni me importa, pero creo que si una mujer ha sido violada, es porque algo habrá hecho o no se habrá resistido lo suficiente. ¡Siempre hay formas de evitarlo!");
quiz[14] = new Question("Qué haces cuando te cruzas con una mujer que va sola por la calle por la noche?", "Cambiar de acera y adelantarme para que me vea y así vaya más tranquila viendo que no le voy a hacer nada", "Decirle que tranquila, que no se preocupe que la acompaño a casa para que le pase nada", "Decirle guapa para que vea que la aprecio.");
quiz[15] = new Question("¿Has criticado alguna vez a una mujer por haber tenido demasiadas parejas sexuales?", "Pues sí, pero ahora que lo dices me doy cuenta de que es muy machista.", "Hombre no es lo mismo una mujer que un hombre, los hombres tienen mucha más necesidad sexual que las mujeres.", "Claro, una mujer decente solo debería estar con un hombre y dedicarse a su casa y familia.");
quiz[16] = new Question("Cuando un hombre silba a una chica por la calle, lo hace por...", "Para demostrar ante el resto de chicos lo hombre que es", "Porque es un romántico empedernido y sabe que a las mujeres les encanta", "Un buen cumplido no le sienta mal a nadie, no?");
quiz[17] = new Question("¡Todas las mujeres son unas exageradas!", "No es cierto, es una de las respuestas por defecto del patriarcado para desacreditar la opinión de una mujer", "Y si ya le sumas la regla, son unas inestables insufribles", "Totalmente de acuerdo, los hombres somos mucho más racionales y estables que cualquier mujer.");
// quiz[18] = new Question("Cuándo ves a una chica borracha ?", "Hace bien, todos tenemos derecho a salir de fiesta sin que nos molesten.", "Pues según como vaya vestida, pensaré que tenga cuidado, una chica no debe ir de cualquier manera y menos borracha, que parece que va pidiendo otras cosas", "Va pidiendo a gritos marcha, eso está claro!");
// pregunta sobre violencia de género, machista, doméstica

var randomQuestion;
var answers = [];
var currentScore = 0;
var totalScore = 0;
var numBattles = 0;
var battlesWon = 0;
var score = document.getElementById("score");

console.log(quiz);

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
   var randomNumber = Math.floor(Math.random()*quiz.length);
      randomQuestion = quiz[randomNumber]; //getQuestion
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
  
}



function checkAnswer(answer) {   
  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    loadRepliesRight()
    
    setTimeout(function (){
    
      btnProvideQuestion();
    }, 3000);
    
    

  } else { 
      adjustScore(false);
      loadRepliesWrong()
      setTimeout(function (){
        btnProvideQuestion();
      }, 3000);
  }	  
}




var battlesPlayed = document.getElementById("battles-played");
var batllesWon = document.getElementById("battles-won");
var twoBattlesWon = document.getElementById("two-battlesWon");
var dialogues = document.getElementsByClassName("Dialogue1");
var dialogueEnemy = document.getElementsByClassName("DialogueEnemy1");
var reply = document.getElementById("reply");

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
      batllesWon.innerHTML = `${battlesWon} batalla ganada de ${numBattles} jugada`;
  
    } else if ((totalScore == 6) && (currentScore >= 4)) {
      battlesWon++;
      batllesWon.innerHTML = `${battlesWon} batallas ganadas de ${numBattles} jugadas`;
    } else if ((totalScore == 9) && (currentScore >= 6)) {
      battlesWon++;
          } else {
            batllesWon.innerHTML = `${battlesWon} batallas ganadas de ${numBattles} jugadas`;
          }
    
  };

  function Dialogue(question,reply,reply1,reply2) {
    this.question = question;
    this.reply = reply;
    this.reply1 = reply1;
    this.reply2 = reply2;
};

 var dialogue = [];
 dialogue[0] = new Dialogue(`Vaya, vaya, ¡veo que tenemos a un machirulo algo hipster por aquí! No sé si fiarme mucho de estos... Van de modernos pero luego a la que hablas con ellos, no paran de hacerte mansplanning...¿Qué tienes que contarme?`, `¿Pero qué dices mujer? Para nada soy machista, pero desde luego sí que creo en la igualdad, al contrario que algunas feminazis que andan sueltas por ahí que parecen que solo odian a los hombres...`, `¿Eso crees? ¡Muy bien! ¡Demuéstrame lo feminista que eres! ¡Comencemos la batalla!`)
 dialogue[1] = new Dialogue(`Bueno, ¡creo que sé de qué vas! Típico votante de Vox, ¿qué es lo que esperas, salvar a las mujeres a lomos de tu caballo?`, `Eso te gustaría a ti, feminazi de pacotilla, solo las mujeres decentes de verdad se merecen el respeto y cuidado que necesitan de un hombre.`, `Con que esas tenemos, ¿no? Si crees que sabes tanto lo que necesitamos las mujeres, atrévete a desmostrarlo. ¡Que comience la batalla!`)
 dialogue[2] = new Dialogue(`Así que aquí tenemos a la típica mujer machista. No sé quién es peor... A ver, ¿qué es lo que opinas del feminismo?`, `Que hartas me tenéis las machorras de las feministas. Sois unas pesaditas. A ver cuándo os ponéis guapas y nos dejais al resto de mujeres en paz, que yo lo que quiero es que me abran la puerta y me cuiden, ¡como toda la vida de Dios!`, `¡Por la gran Madonna!¡Esto es peor de lo que me imaginaba! A ver si vamos aprendiendo que las feministas no son tus enemigas, ¡el patriarcado es tu enemigo! En fin, ¡que comience la batalla!`);

 function setScreenBlock(x) {
   return x.style.display = "block"
 }

 function setScreenFlex(x) {
  return x.style.display = "flex"
}
function screenNone(x) {
  return x.style.display = "none"
}


function loadDialogues(num, index) {
  setTimeout(function () {
    setScreenBlock(dialogues[index]);
    dialogues[index].innerHTML = `${dialogue[num].question}`;
  }, 2000);
  setTimeout(function () {
    setScreenBlock(dialogueEnemy[index]);
    screenNone(dialogues[index]);
    dialogueEnemy[index].innerHTML = `${dialogue[num].reply}`;
  },8000);
  setTimeout(function () {
    screenNone(dialogueEnemy[index]);
    setScreenBlock(dialogues[index]);
    dialogues[index].innerHTML = `${dialogue[num].reply1}`;
  },15000);
  setTimeout(function () {
    screenNone(dialogues[index]);
  },20000);
}
function ReplyBattle (replyRight, replyWrong) {
  this.replyRight = replyRight;
  this.replyWrong = replyWrong;
 
};

var replies = [];
replies[0] = new ReplyBattle(`Veo que el nivel no es tan bajo como pensaba, muy bien, ¡sigue así!`, `Jaja, ¡sabía que no podrías acertarla! ¡Más machista no se puede ser!`)
replies[1] = new ReplyBattle(`¡Pero bueno! ¡Esto sí que es una sorpresa! ¡Respuesta correcta!`, `¡No era tan difícil! ¡Respuesta incorrecta!`)
replies[2] = new ReplyBattle(`¡Muy bien! Si sigues así, ¡te daré el certificado de feminista oficial!`, `Si la gran Simone de Beauvoir levantara la cabeza... ¡No se puede estar más equivocado!` );
replies[3] = new ReplyBattle(`¡No puede ser! ¡Respuesta correcta!`, `¡Pero qué barbaridad! Si sigues así, ¡perderás la guerra!`);
replies[4] = new ReplyBattle(`¡Estupendo! Si sigues así, me habrás demostrado lo feminista que eres.`, `Así no hay quien siga, ¡respuesta incorrecta!`)
replies[5] = new ReplyBattle(`¡Wow! ¡Me tienes estupefacta! ¡Sigue así!`, `¡Así no hay manera! ¡Espero que la sociedad no sea ni la mitad de machista que tú!`);



function loadRepliesRight() {
  var randomNumber = Math.floor(Math.random()*replies.length);
    setScreenBlock(reply);
    reply.innerHTML = `${replies[randomNumber].replyRight}`;
    setTimeout(function (){
      screenNone(reply);
    }, 3000);
  } 
  
  function loadRepliesWrong() { 
    var randomNumber = Math.floor(Math.random()*replies.length);
    setScreenBlock(reply);
      reply.innerHTML = `${replies[randomNumber].replyWrong}`;
      setTimeout(function () {
        screenNone(reply);
      }, 3000);
  }	

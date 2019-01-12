var battlesPlayed = document.getElementById("battles-played");
var batllesWon = document.getElementById("battles-won");
var twoBattlesWon = document.getElementById("2-battlesWon");
var dialogues = document.getElementsByClassName("Dialogue1");
var dialogueEnemy = document.getElementsByClassName("DialogueEnemy1");


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
      score.innerHTML = `Enhorabuena! Has ganado la batalla. Sigue luchando hasta ganar la guerra!`;
    } else if ((totalScore == 6) && (currentScore >= 4)) {
      battlesWon++;
      twoBattlesWon.innerHTML = `Wow! Enhorabuena! Has ganado ya 2 batallas y por tanto la guerra! Si te apetece ve a por el tercero!`;
    } else if ((totalScore == 9) && (currentScore >= 6)) {
      battlesWon++;
    }
    batllesWon.innerHTML = `${battlesWon} batallas ganadas de ${numBattles} jugadas`;
  };

  function Dialogue(question,reply,reply1,reply2) {
    this.question = question;
    this.reply = reply;
    this.reply1 = reply1;
    this.reply2 = reply2;
};

 var dialogue = [];
 dialogue[0] = new Dialogue(`Vaya, vaya, veo que tenemos a un machirulo algo hispter por aquí! No sé si fiarme mucho de estos... Van de modernos pero luego a la que hablas con ellos, no paran de hacerte mansplanning...Qué tienes que contarme?`, `Pero qué dices mujer? Para nada soy machista, pero desde luego sí que creo en la igualdad, al contrario que algunas feminazis que andan sueltas que parecen que solo odian a los hombres`, `¿Eso crees? ¡Muy bien! Comencemos la batalla!`)
 dialogue[1] = new Dialogue(`Bueno, creo que sé de qué vas! Típico votante de Vox, esperas salvar a las mujeres a lomos de tu caballo?`, `Eso te gustaría a ti, feminazi de pacotilla, solo las mujeres de verdad que honran a su hombre se merecen el respeto y cuidado que le comulgaría`, `Con que esas tenemos, no? Creo que te mereces descubrir un par de situaciones, a ver si cambias de opinión. Que comience la batalla!`)
 dialogue[2] = new Dialogue(`Así que aquí tenemos a un estereotipo de mujer machista. No sé quién es peor... A ver qué es lo que opinas del feminismo y de sus derechos?`, `Quer hartas me tenéis las machorras de las feministas. Sois unas pesaditas. A ver cuándo os ponéis guapas y nos dejais al resto de mujeres en paz, que yo lo que quiero es que  me abran la puerta y me cuiden, como toda la vida`, `Esto es peor de lo que me imaginaba! Por la gran Madonna! A ver si vamos aprendiendo que las feministas no son tus enemigas, el patriarcado es tu enemigo. En fin, que comience la batalla!`);

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
  },13000);
  setTimeout(function () {
    screenNone(dialogues[index]);
  },18000);
}

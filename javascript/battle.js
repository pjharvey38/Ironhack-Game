var battlesPlayed = document.getElementById("battles-played");
var batllesWon = document.getElementById("battles-won");
var twoBattlesWon = document.getElementById("2-battlesWon");


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

function loadDialogues() {

}

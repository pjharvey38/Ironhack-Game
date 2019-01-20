let btnStart = document.getElementById("btn-start");
let splashScreen = document.getElementById("splash-screen");
let introductionScreen = document.getElementById("introduction-screen");
let mapScreen = document.getElementById("map-screen");
let battleScreen = document.getElementById("battle-screen");
let btnIntroduction = document.getElementById("btn-map");
let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let battle = document.getElementById("battle");
let winScreen = document.getElementById("win-Screen");
let gameOver = document.getElementById("GameOver-screen");
let quizImg = document.getElementById("quiz");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let enemy1 = document.getElementById("enemy1");
let enemy2 = document.getElementById("enemy2");
let enemy3 = document.getElementById("enemy3");
let girlKatana = document.getElementById("katana-girl");
let girlKatana2 = document.getElementById("katana-girl2");
let girlKatana3 = document.getElementById("katana-girl3");
let enemy1Img = document.getElementById("enemy1-png");
let enemy2Img = document.getElementById("enemy2-png");
let enemy3Img = document.getElementById("enemy3-png");
let btnenemy = document.getElementsByClassName("btnEnemy");

let gameEnemy = document.getElementsByClassName("gameEnemy");
let katanaGirl = document.getElementsByClassName("katanaGirl");
let enemyImage = document.getElementsByClassName("enemyImg");
let enemyAvatar = document.getElementsByClassName("enemy-avatar");

function setScreenBlock(x) {
    return x.style.display = "block"
  }
 
  function setScreenFlex(x) {
   return x.style.display = "flex"
 }
 function screenNone(x) {
   return x.style.display = "none"
 }
 

function setIntroductionScreen() {
    splashScreen.style.display= "none";
    introductionScreen.style.display = "flex";   
}
function setMapScreen() {
    introductionScreen.style.display = "none";
    battle.style = "none";
    mapScreen.style.display = "block";
    
}

function setQuiz () {
    setScreenBlock(quizImg);
    quizImg.style.height = "30%";
}



function setBattle (battleOK, battleNone1, battleNone2) {
    screenNone(mapScreen); 
    setScreenBlock(battle);
    screenNone(gameEnemy[battleNone2]);
    screenNone(gameEnemy[battleNone1]);
    setScreenBlock(gameEnemy[battleOK]);
    btnenemy[battleOK].style.backgroundColor = "#f58637";    
    setTimeout(function() {
        gameEnemy[battleOK].style.height = "70%";
        katanaGirl[battleOK].style.top = "310px";
        enemyImage[battleOK].style.top = "300px";
        setQuiz();
        btnProvideQuestion(); 
        }, 21000);  
        
  
}


function setWinScreen() {
    screenNone(battle);
    setScreenFlex(winScreen);
}

function setGameOver() {
    screenNone(battle);
    setScreenFlex(gameOver);
}

function changeScreen() {
    if (totalScore == 3) {
        setTimeout(function() {
      setMapScreen();
      screenNone(quizImg);
      
        }, 3000);
    } else if (totalScore == 6) {
        setTimeout(function() {
            setMapScreen();
            screenNone(quizImg);
            
              }, 3000);
    } else if (totalScore == 9) {
     if(battlesWon >= 2) {
         setTimeout(function() {
            setWinScreen();
         }, 3000)
        
      } else {
        setTimeout(function() {
            setGameOver();
    }, 3000);
  }}}
function setEnemyID(idNum) {
    enemyAvatar[idNum].style.display = "flex";
}

function enemyIdNone(idNum) {
    enemyAvatar[idNum].style.display = "none";
}
btnStart.addEventListener("click", function (){
    //estamos en splash screen y queremos pasar a Introduction Screen
    setIntroductionScreen();
});

btnIntroduction.addEventListener("click", function() {
    //estamos en introduction screen y queremos pasar al mapa
    setMapScreen();
})

id1.addEventListener("click", function() {
    //estamos en introduction screen y queremos pasar al mapa
    setBattle(0, 1, 2);
    loadDialogues(0, 0);
   

})

id2.addEventListener("click", function() {
    
    setBattle(1, 0, 2);
    loadDialogues(1, 1);
 
})

id3.addEventListener("click", function() {
   
    setBattle(2, 0, 1);
    loadDialogues(2, 2);
    
})

id1.addEventListener("mouseover", function() {
    setEnemyID(0);
})
id2.addEventListener("mouseover", function() {
    setEnemyID(1);
})
id3.addEventListener("mouseover", function() {
    setEnemyID(2);
})

id1.addEventListener("mouseout", function() {
    enemyIdNone(0);
})
id2.addEventListener("mouseout", function() {
    enemyIdNone(1);
})
id3.addEventListener("mouseout", function() {
    enemyIdNone(2);
})


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
// let btnenemy2 = document.getElementsByClassName("start-splash")[3];
// let btnenemy3 = document.getElementsByClassName("start-splash")[4];
let gameEnemy = document.getElementsByClassName("gameEnemy");
let katanaGirl = document.getElementsByClassName("katanaGirl");
let enemyImage = document.getElementsByClassName("enemyImg");
console.log(gameEnemy);

function setIntroductionScreen() {
    splashScreen.style.display= "none";
    introductionScreen.style.display = "flex";   
}
function setMapScreen() {
    introductionScreen.style.display = "none";
    battle.style = "none";
    mapScreen.style.display = "flex";
}

function setQuiz () {
    setScreenBlock(quizImg);
}

// function setBattle1 () {
//     mapScreen.style.display = "none"; 
//     battle.style.display = "block";
//     enemy2.style.display = "none";
//     enemy3.style.display = "none";
//     enemy1.style.display = "block";
//     btnenemy1.style.backgroundColor = "red";
//     loadDialogues(0, 0);
    
//         setTimeout(function() {
//         enemy1.style.height = "550px"
//         girlKatana.style.top = "160px";
//         enemy1Img.style.top = "160px";
//         setQuiz();
//         btnProvideQuestion(); 
//         }, 21000);     
        

// }

function setBattle (battleOK, battleNone1, battleNone2) {
    screenNone(mapScreen); 
    setScreenBlock(battle);
    screenNone(gameEnemy[battleNone2]);
    screenNone(gameEnemy[battleNone1]);
    setScreenBlock(gameEnemy[battleOK]);
    btnenemy[battleOK].style.backgroundColor = "red";
 
        
    setTimeout(function() {
        gameEnemy[battleOK].style.height = "550px";
        katanaGirl[battleOK].style.top = "180px";
        enemyImage[battleOK].style.top = "180px";
        setQuiz();
        btnProvideQuestion(); 
        }, 21000);  
        
  
}

// function setBattle2 () {
//     mapScreen.style.display = "none"; 
//     battle.style.display = "block";
//     enemy1.style.display = "none";
//     enemy3.style.display = "none";
//     enemy2.style.display = "block";
//     btnenemy2.style.backgroundColor = "red";
//     loadDialogues(1, 1);
        
//     setTimeout(function() {
//         enemy2.style.height = "550px";
//         girlKatana2.style.top = "180px";
//         enemy2Img.style.top = "180px";
//         setQuiz();
//         btnProvideQuestion(); 
//         }, 21000);  
        
  
// }
// function setBattle3 () {
//     mapScreen.style.display = "none"; 
//     battle.style.display = "block";
//     enemy1.style.display = "none";
//     enemy2.style.display = "none";
//     enemy3.style.display = "block";
//     btnenemy3.style.backgroundColor = "red";
//      loadDialogues(2, 2);   
//     setTimeout(function() {
//         enemy3.style.height = "550px";
//         girlKatana3.style.top = "180px";
//         enemy3Img.style.top = "180px";
//         setQuiz();
//         btnProvideQuestion(); 
//         }, 21000);  
        
// }
function setWinScreen() {
    screenNone(battle);
    setScreenBlock(winScreen);
}

function setGameOver() {
    screenNone(battle);
    setScreenBlock(gameOver);
}

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
    loadDialogues(0, 0)

})

id2.addEventListener("click", function() {
    
    //estamos en introduction screen y queremos pasar al mapa
    setBattle(1, 0, 2);
    loadDialogues(1, 1)
})

id3.addEventListener("click", function() {
    //estamos en introduction screen y queremos pasar al mapa
    setBattle(2, 0, 1);
    loadDialogues(2, 2);
})

// answerA.addEventListener("click", function (){
//     checkAnswer(answerA);
// })

// answerB.addEventListener("click", function (){
//     checkAnswer(answerB);
// })
// answerA.addEventListener("click", function (){
//     checkAnswer(answerC);
// })
//lógica juego

// pantalla, botón start/
// click en start - > cambia atributo de div con clase "splash" y lo cambia a clase "introduction-screen". 
// aparece  pantalla "introduction" - botón "Start game" - > click y cambio de atributo y de pantalla/div paso a clase "map-screen"
// en mapa hay un div por cada personaje a seleccionar - > 3 personajes/div con ID diferentes. 
// función clickID1? - > si presionas ese botón aparece un texto/array de texto descritivo.
// así con cada personaje del mapa. 
// hacer una función mapa-personaje. Al presionar un botón del mapa  - > envía a otra pantalla, la de batalla con ese personaje. 


// btnStart.addEventListener("click", function() {
//     if estamos en pantalla splash pasar a pantalla de introduction
//     else pasar a pantalla de batalla
// }


// function characterSelection (ID) {
//     if ID selected === 1 pasar a batalla con ID1
//     if ID selected === 2 pasar a batalla con ID2
//     else === pasar a batalla con ID 3}

//  clase Game {
//      this.protagonista, 
//      this.enemy = ID
//      this.counter = 0;
//     }
 
//  function enemyIDIntroduction (id) {
// if ID1 -> introductionText == [...] AND mainCharacter text === [………]
// if ID2 -> introductionText == [...] AND mainCharacter text === [………]
// if ID3 -> introductionText == [...] AND mainCharacter text === [………]}


//  function interactionBattle (){
//      var respuestasRandom = math.random()[1, 2, 3, 4... así hasta 24 repuestas falsas posibles a ser seleccionadas de manera random]
//     var questions = {
//         'question1': 'response1',
//         'question2': 'response2'
//       }
//       function correctReply(question){
            
//         if(question.value.x === response.x) {
//             "Muy bien respuesta correcta!" y sumo 1 al contador, porque al final si tenemos dos respuestas correctas de tres, pasaremos a pantalla win. 
//         } else {
//           respuesta incorrecta y sumo 0 al contador 
//         }
//       }
    
// function pantallaFinal (counter) {
//     if (counter === 2 o 3) {
//        return winscreen
//     } else {
//         return Game over screen
//     }
// }
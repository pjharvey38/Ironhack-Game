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
let gameOver = document.getElementById("gameOver-screen");
let quizImg = document.getElementById("quiz");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let enemy1 = document.getElementById("enemy1");
let enemy2 = document.getElementById("enemy2");
let enemy3 = document.getElementById("enemy3");

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
    quizImg.style.display = "block";
}

function setBattle1 () {
    mapScreen.style.display = "none"; 
    battle.style.display = "block";
    enemy1.style.display = "block";
        setQuiz();
        btnProvideQuestion();      
        

}
function setBattle2 () {
    mapScreen.style.display = "none"; 
    battle.style.display = "block";
    enemy1.style.display = "none";
    enemy2.style.display = "block";
        setQuiz();
        btnProvideQuestion();
        
  
}
function setBattle3 () {
    mapScreen.style.display = "none"; 
    battle.style.display = "block";
    enemy2.style.display = "none";
    enemy3.style.display = "block";
        setQuiz();
        btnProvideQuestion();
        
}
function setWinScreen() {
    battle.style.display = "none";
    winScreen.style.display = "block";
}

function setGameOver() {
    battle.style.display = "none";
    gameOver.style.display = "block";
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
    setBattle1();
})

id2.addEventListener("click", function() {
    //estamos en introduction screen y queremos pasar al mapa
    setBattle2();
})

id3.addEventListener("click", function() {
    //estamos en introduction screen y queremos pasar al mapa
    setBattle3();
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
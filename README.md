# Project's name
Aún por definir.

## Description
La lucha de insultos de Monkey Island aplicada a la lucha feminista. Un personaje femenino se va encontrando con distintos machirulos y personajes machistas a los que tiene que ganar con argumentos de peso para el movimiento feminista. Gana cuando ha conseguido convertir al mayor número de oponentes.
La protagonista va enfrentándose a distintos personajes machistas.
Cada enfrentamiento es una batalla diferente.
En cada batalla, el personaje machista expresa su opinión machista y ante ello la protagonista se defiende con preguntas perspicaces.
Cada pregunta viene con tres respuestas posibles.
Hay que acertar al menos dos para ganar la batalla y convencer a ese personaje.
El jugador escoge una respuesta que crea adecuada para convencer al personaje machista.
Así hasta que se hagan las tres preguntas.
Cuando acaba la primera batalla, se pasa automáticamente al mapa inicial para seleccionar a otro personaje machista.
Si pierde la segunda batalla, vuelve al mapa para tener el último enfrentamiento.
Si gana la segunda batalla, directamente a pantalla de victoria y pregunto si quiere volver a jugar otra partida.
Si pierde la última batalla, pasa directamente a pantalla de Game Over.



## MVP (DOM - CANVAS)
Juego en DOM.
Splash Screen coy una imagen descriptiva y nombre del juego.
Música de fondo.
Pantalla introductoria de personaje y explicación de juego con botón Start.
Se pasa a pantalla de mapa, con 3 botones, cada uno representa a cada personaje.
Barra con contador de batallas ganadas o perdidas.
Al pasar el ratón por cada botón aparece un texto descriptivo de este personaje y/o imagen del personaje.
Una vez seleccionado el personaje, se pasa a una pantalla batalla con los dos personajes dispuestos para la batalla.
Dos personajes inmóviles.
Aparece un texto de frases típicas que puede decir el oponente.
Aparece una voz que interpreta al personaje machista.
Una vez ha lanzado su diatriba, se van sucediendo las tres preguntas.
En una barra abajo de la pantalla, aparece la pregunta y tres posibles respuestas.
Se selecciona una de las tres.
Así hasta tres preguntas.
Fin de batalla, vuelta a mapa.
Selección de otro oponente.
Batalla.
Después de 3 batallas, si ha ganado dos batallas, se pasa a pantalla de victoria. Música de victoria y mensaje de victoria.
Si ha perdido dos batallas, se pasa a pantalla de GameOver. Música y mensajes para animar a la lucha.

## Backlog
Pantalla de mapa, en lugar de botones simples, aparece una imagen de cada personaje en un tamaño y resolución más grandes. Tienen cierto movimiento.
Al pasar el mouse se agranda la imagen del personaje y el texto descriptivo mientras se difumina el mapa de fondo. Imagen e interacción mejorada.
En cada batalla, si un personaje acierta una pregunta avanza una posición y el otro personaje retrocede una posición. Así hasta acabar cada batalla.
En lugar de tres oponentes, aparecen 5 oponentes.
Gana el juego si gana 3 de 5 batallas, como en el tenis.
Mayor número de preguntas y respuestas.

## Data structure
Clase Protagonista
Clase Oponente
Clase Batalla
Clase Juego



## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- introductionScreen
- mapScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
https://trello.com/invite/b/ekD4fDcA/4e89292a86b38769b12801f14df27f60/juego-ironhack




## Links


### Trello
https://trello.com/invite/b/ekD4fDcA/4e89292a86b38769b12801f14df27f60/juego-ironhack

### Git
URls for the project repo and deploy
https://github.com/pjharvey38/Ironhack-Game
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
https://slides.com/claudiainfantesvillafranca



// No se encuentra vinculado al HTML, es la guia iniccial para ir desarrollado

//Objetos - Enemigos

const enemigoA = {enemigoFuegoNumero: 1, enemigoName: "Esqueleto de Fuego", puntoDeHabEnemigoFuego: 6};
const enemigoB = {enemigoHieloNumero: 2, enemigoName: "Esqueleto de Hielo", puntoDeHabEnemigoHielo: 10};
const enemigoC = {enemigoElectricoNumero: 3, enemigoName: "Esqueleto Eléctrico", puntoDeHabEnemigoElectrico: 2};
const enemigoD = {enemigoAcuaticoNumero: 4, enemigoName: "Esqueleto de Agua", puntoDeHabEnemigoAcuatico: 4};

// Arrays - Enemigos

const enemigos = [enemigoA, enemigoB, enemigoC, enemigoD];
console.log (enemigos, enemigos.length);

// Suma de puntos de Habilidad 
function sumar (puntoDeHabEnemigoElectrico, puntoDeHabEnemigoAcuatico, puntoDeHabEnemigoFuego, puntoDeHabEnemigoHielo) {
  return enemigoC.puntoDeHabEnemigoElectrico + enemigoD.puntoDeHabEnemigoAcuatico + enemigoA.puntoDeHabEnemigoFuego + enemigoB.puntoDeHabEnemigoHielo;
}
let resultado = sumar(enemigoC.puntoDeHabEnemigoElectrico, enemigoD.puntoDeHabEnemigoAcuatico, enemigoA.puntoDeHabEnemigoFuego, enemigoB.puntoDeHabEnemigoHielo);

//Primera Pelea 
let historia6 = prompt ("A qué esqueleto debería golpear primero? Recuerda! Coloca numeros para jugar: siendo 1 igual al Esqueleto de Fuego, 2 igual al Esqueleto de Hielo, 3 igual al Esqueleto Electrico y 4 el Esqueleto de Agua."); {

while (historia6 != 3) {
 alert (`El ataque solo hizo cosquillas al enemigo... Inténtalo de nuevo.`);
 historia6 = prompt ("¿A qué esqueleto debería golpear primero? ¡Recuerda! Coloca numeros para jugar: siendo 1 igual al Esqueleto de Fuego, 2 igual al Esqueleto de Hielo, 3 igual al Esqueleto Eléctrico y 4 el Esqueleto de Agua.");

  if (historia6 == 3)
  alert("Muy bien, el esqueleto eléctrico ha sido derrotado.");}
}

//Segunda Pelea 
let historia7 = prompt ("El mago aprendió a utilizar el poder del rayo y ganó 2 puntos de habilidad. ¿Cuál será su siguiente movimiento? ¡Recuerda! Coloca numeros para jugar: siendo 1 igual al Esqueleto de Fuego, 2 igual al Esqueleto de Hielo y 4 el Esqueleto de Agua."); {

  while (historia7 != 4) {
   alert (`El ataque solo hizo cosquillas al enemigo... Intentalo de nuevo.`);
   historia7 = prompt ("El mago aprendió a utilizar el poder del rayo ¿Cuál será su siguiente movimiento? ¡Recuerda! Coloca numeros para jugar: siendo 1 igual al Esqueleto de Fuego, 2 igual al Esqueleto de Hielo y 4 el Esqueleto de Agua.");
  
    if (historia7 ==4) 
    alert("Muy bien, el esqueleto de Agua ha sido derrotado.");}
  }

//Tercera Peleta
let historia8 = prompt ("Otra habilidad conseguida, el poder del agua y ganó 4 puntos de habilidad. Dos esqueletos menos ¿Cuál será el próximo en caer? ¡Recuerda! Coloca numeros para jugar: siendo 1 igual al Esqueleto de Fuego y 2 igual al Esqueleto de Hielo.");
{  
while (historia8 != 1) {
  alert (`El ataque solo hizo cosquillas al enemigo... Inténtalo de nuevo.`);
  historia8 = prompt ("Otra habilidad conseguida, el poder del agua. Dos esqueletos menos ¿Cuál será el próximo en caer? ¡Recuerda! Coloca numeros para jugar: siendo 1 igual al Esqueleto de Fuego y 2 igual al Esqueleto de Hielo.");
  
  if (historia8 ==1) 
    alert("Muy bien, el esqueleto de Fuego ha sido derrotado.");}
  }

// Cuarta Pelea
let historia9 = prompt ("El mago aprendo a manipular el fuego y ganó 6 puntos de habilidad. Cansado pero sabiendo que estaba a un paso de salir con vida de aquella cueva, decidió dar su golpe final ¿Cuál esqueleto queda por vencer?");
{
  while (historia9 != 2) {
   alert (`El pobre esqueleto ya estaba muerto... Inténtalo de nuevo.`);
   historia9 = prompt ("El mago aprendió a manipular el fuego. Cansado pero sabiendo que estaba a un paso de salir con vida de aquella cueva,  decidió dar su golpe final ¿Cuál esqueleto queda por vencer?");
  
  if (historia9 ==2) 
    alert("Muy bien, el esqueleto de Hielo ha sido derrotado.");}
  }

let historia10 = alert ("Finalmente el elemento hielo se sumó a su abanico de magias oscuras y ganó 10 puntos de habilidad. Habiendo sobrevivido al rodeo y tras haber aprendido un montón de habilidades nuevas, el mago emprende su viaje de regreso a su hogar.");

//Mensaje Final

console.log (`${magoNegroName} ha completado la aventura con éxito obteniendo un resultado de ${resultado} puntos de habilidad.`);




//Objetos

const contFormulario = document.getElementById("div-container");
const formulario = document.getElementById("id-form");
const body = document.querySelector(`body`);
const titulo = document.getElementById ("id-titulo");

let inicioHistoria = document.getElementById("contHistoria1");
let inicioHistoria2 = document.getElementById("contHistoria2");
let inicioHistoria3 = document.getElementById("contHistoria3");
let inicioHistoria4 = document.getElementById("contHistoria4");
let inicioHistoria5 = document.getElementById("contHistoria5");
let inicioHistoria6 = document.getElementById("contHistoria6");
let inicioHistoria7 = document.getElementById("contHistoria7");
let inicioHistoria8 = document.getElementById("contHistoria8");
let inicioHistoria9 = document.getElementById("contHistoria9");
let inicioHistoria10 = document.getElementById("contHistoria10");


//Variables Storage

let nombreStorage = localStorage.getItem ("nombreUsuario");
let edadStorage = localStorage.getItem ("edadUsuario");
let paisStorage = localStorage.getItem ("paisUsuario");


const botonPelea = () => {
    alert('Golpeaste al enemigo');
}
  
//storage y evento

formulario.addEventListener("submit", (e) => { 
     e.preventDefault();
     console.log (nombreStorage.value, edadStorage.value, paisStorage.value);
     localStorage.setItem ("nombreUsuario", formulario.children [2].value);
     localStorage.setItem ("edadUsuario", formulario.children [4].value);
     localStorage.setItem ("paisUsuario", formulario.children [6].value);
     nombreStorage = formulario.children [2].value;
     verificarFormulario ();
});
 

const verificarFormulario = () => {
    if (nombreStorage && nombreStorage !== `null` && edadStorage && edadStorage !== `null` && paisStorage && paisStorage !== `null` ) {
        console.log ("La informacion ya existe");
        formulario.remove ();

        inicioHistoria.innerHTML = `En unas tierras lejanas, un pequeño mago llamado ${nombreStorage} se encontraba explorando un tranquilo bosque no muy alejado del pueblo en donde vivia en el país ${paisStorage}. <button id="button" class="button">Continuar</button>`;
        
    }
     else { console.log ("La informacion no existe");
}
}

//inicioHistoria6.onclick= (botonPeleaA3) => {
 //   inicioHistoria6.remove ();
   // textPeleaA3.innerHTML =  `Muy bien!. <button id="button" class="button">Continuar</button>`;
//};

// Modificando el HTML


inicioHistoria.onclick = () => {
    
    inicioHistoria.remove ();
    inicioHistoria2.innerHTML =  `En su viaje tomó una decisión muy importante. Decidió no seguir el camino marcado por pequeñas rocas y se introdujo en el corazón del bosque. Vio ardillas trepar altos arboles, escuchó pajaros entonando distintas melodias. 
    Vio también, la entrada a una pequeña cueva, a la que su curiosidad lo invitó a ingresar para ver que podría encontrar allí. <button id="button" class="button">Continuar</button>`;

}

//Cambio de Imagen de Fondo
inicioHistoria.addEventListener (`click`, () => { 
    document.body.style.backgroundImage = "url(img/img-bosque.png)";
});
//Fin de Cambio de Imagen de Fondo


inicioHistoria2.onclick = () => {
    inicioHistoria2.remove ();
    titulo.remove();
    inicioHistoria3.innerHTML =  `Al poner un pie dentro, fue asaltado por cuatro esqueletos. El primero estaba prendido fuego, el segundo tenia los huesos fríos como el hielo, al tercero le desprendían chispas eléctricas y el último estaba dentro de una cubeta de agua. <button id="button" class="button">Continuar</button>`;
};

//Cambio de Imagen de Fondo
inicioHistoria2.addEventListener (`click`, () => { 
    document.body.style.backgroundImage = "url(img/img-cueva.png)";
});
//Fin de Cambio de Imagen de Fondo

inicioHistoria3.onclick = () => {
    inicioHistoria3.remove ();
    inicioHistoria4.innerHTML =  `El mago solo contaba con un poder especial, el único que había aprendido. Nunca se había enfrentado a una situación igual a esta. Su poder mágico consistía en utilizar la tierra para atacar al enemigo, creando una lluvia de particulas arenosas. <button id="button" class="button">Continuar</button>`;
};

inicioHistoria4.onclick = () => {
    inicioHistoria4.remove ();
    inicioHistoria5.innerHTML =  `Sin mirar atrás, aunque con un poco de temor, el mago agarró con fuerza su bastón mágico y se decidió a dar el primer golpe. <button id="button" class="button">Continuar</button>`;
};



//Primera Pelea 


//let botonPeleaA1 = document.getElementById("buttonPeleaA");
let botonPeleaA2 = document.getElementById("buttonPeleaA2");
let botonPeleaA3 = document.getElementById("buttonPeleaA3");
let botonPeleaA4 = document.getElementById("buttonPeleaA4");
let textPeleaA = document.getElementById("textPeleaA");
let textPeleaA2 = document.getElementById("textPeleaA2");
let textPeleaA3 = document.getElementById("textPeleaA3");
let textPeleaA4 = document.getElementById("textPeleaA4");




inicioHistoria5.onclick = () => {
    inicioHistoria5.remove ();
    inicioHistoria6.innerHTML = `A qué esqueleto debería golpear primero? 

    <button id="buttonPeleaA" class="buttonPeleaA"  onclick="botonPelea()">Esqueleto de fuego</button>
    <p id="textPeleaA"></p>

    <button id="buttonPeleaA2" class="buttonPeleaA2" onclick="botonPeleaA2" >Esqueleto de hielo</button>
    <p id="textPeleaA2"></p>
    
    <button id="buttonPeleaA3" class="buttonPeleaA3" onclick="botonPeleaA3" >Esqueleto electrico</button>
    <p id="textPeleaA3"></p>
    
    <button id="buttonPeleaA4" class="buttonPeleaA4" onclick="botonPeleaA4" >Esqueleto de agua</button>
    <p id="textPeleaA4"></p>`; 

}



    

    



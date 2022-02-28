// Variables
const parrafo = document.querySelector('.parrafo');
const parrafo2 = document.querySelector('.parrafo2');
const parrafo3 = document.querySelector('.parrafo3');
const parrafo4 = document.querySelector('.parrafo4');
const parrafo5 = document.querySelector('.parrafo5'); const parrafo6 = document.querySelector('.parrafo6');
const parrafo7 = document.querySelector('.parrafo7');
const parrafo8 = document.querySelector('.parrafo8');
const parrafo9 = document.querySelector('.parrafo9');
const parrafo10 = document.querySelector('.parrafo10'); const parrafo11 = document.querySelector('.parrafo11');
const parrafo12 = document.querySelector('.parrafo12');
const parrafo13 = document.querySelector('.parrafo13');
const parrafo14 = document.querySelector('.parrafo14');
const parrafo15 = document.querySelector('.parrafo15');
const parrafo16 = document.querySelector('.parrafo16');
const parrafo17 = document.querySelector('.parrafo17');
const parrafo18 = document.querySelector('.parrafo18');
const parrafo19 = document.querySelector('.parrafo19');
const parrafo20 = document.querySelector('.parrafo20');
const parrafo21 = document.querySelector('.parrafo21');
const parrafo22 = document.querySelector('.parrafo22');
const parrafo23 = document.querySelector('.parrafo23');
const parrafo24 = document.querySelector('.parrafo24');
const parrafo25 = document.querySelector('.parrafo25');
const titulo = document.querySelector('.titulo');
const boton = document.querySelector('.boton');

let palabras = ["pujar", "rotar", "queso", "hueso", "bello"];
let palabra = palabras[0];


// Eventos
document.addEventListener("keypress", tecla);
boton.addEventListener('click', botonEvent);

// Funciones

// Primera columna
function tecla(e) {
    let letra = String.fromCharCode(e.keyCode);

    document.onkeydown = function (event) {
        var key = event.keyCode || event.charCode;
        if (key == 8) {
            if (parrafo25.textContent != '') {
                console.log("Borrando...");
                parrafo25.textContent = '';
            } else if (parrafo24.textContent != '') {
                console.log("Borrando...");
                parrafo24.textContent = '';
            } else if (parrafo23.textContent != '') {
                console.log("Borrando...");
                parrafo23.textContent = '';
            } else if (parrafo22.textContent != '') {
                console.log("Borrando...");
                parrafo22.textContent = '';
            } else if (parrafo21.textContent != '') {
                console.log("Borrando...");
                parrafo21.textContent = '';
            } else if (parrafo20.textContent != '') {
                console.log("Borrando...");
                parrafo20.textContent = '';
            } else if (parrafo19.textContent != '') {
                console.log("Borrando...");
                parrafo19.textContent = '';
            } else if (parrafo18.textContent != '') {
                console.log("Borrando...");
                parrafo18.textContent = '';
            } else if (parrafo17.textContent != '') {
                console.log("Borrando...");
                parrafo17.textContent = '';
            } else if (parrafo16.textContent != '') {
                console.log("Borrando...");
                parrafo16.textContent = '';
            } else if (parrafo15.textContent != '') {
                console.log("Borrando...");
                parrafo15.textContent = '';
            } else if (parrafo14.textContent != '') {
                console.log("Borrando...");
                parrafo14.textContent = '';
            } else if (parrafo13.textContent != '') {
                console.log("Borrando...");
                parrafo13.textContent = '';
            } else if (parrafo12.textContent != '') {
                console.log("Borrando...");
                parrafo12.textContent = '';
            } else if (parrafo11.textContent != '') {
                console.log("Borrando...");
                parrafo11.textContent = '';
            } else if (parrafo10.textContent != '') {
                console.log("Borrando...");
                parrafo10.textContent = '';
            } else if (parrafo9.textContent != '') {
                console.log("Borrando...");
                parrafo9.textContent = '';
            } else if (parrafo8.textContent != '') {
                console.log("Borrando...");
                parrafo8.textContent = '';
            } else if (parrafo7.textContent != '') {
                console.log("Borrando...");
                parrafo7.textContent = '';
            } else if (parrafo6.textContent != '') {
                console.log("Borrando...");
                parrafo6.textContent = '';
            } else if (parrafo5.textContent != '') {
                console.log("Borrando...");
                parrafo5.textContent = '';
            } else if (parrafo4.textContent != '') {
                console.log("Borrando...");
                parrafo4.textContent = '';
            } else if (parrafo3.textContent != '') {
                console.log("Borrando...");
                parrafo3.textContent = '';
            } else if (parrafo2.textContent != '') {
                console.log("Borrando...");
                parrafo2.textContent = '';
            } else if (parrafo.textContent != '') {
                console.log("Borrando...");
                parrafo.textContent = '';
            }
    }
    }
    if (parrafo.textContent == '') {
        parrafo.textContent = letra;
    } else if (parrafo2.textContent == '') {
        parrafo2.textContent = letra;
    } else if (parrafo3.textContent == '') {
        parrafo3.textContent = letra;
    } else if (parrafo4.textContent == '') {
        parrafo4.textContent = letra;
    } else if (parrafo5.textContent == '') {
        parrafo5.textContent = letra;
        if (parrafo5.textContent != '') {
            boton.disabled = false;
            document.addEventListener("keypress", tecla2);
            boton.addEventListener('click', validarParrafo);
        }
    }

    // Validar las respuestas
    function validarParrafo() {

        // Primera letra9
        if (parrafo.textContent == palabra.charAt(0)) {
            parrafo.classList.add("correcto");
        } else if (parrafo.textContent == palabra.charAt(1) || parrafo.textContent == palabra.charAt(2) || parrafo.textContent == palabra.charAt(3) || parrafo.textContent == palabra.charAt(4)) {
            parrafo.classList.add("semiCorrecto");
        } else {
            parrafo.classList.add("incorrecto");
        }

        // Segunda letra
        if (parrafo2.textContent == palabra.charAt(1)) {
            parrafo2.classList.add("correcto");
        } else if (parrafo2.textContent == palabra.charAt(0) || parrafo2.textContent == palabra.charAt(2) || parrafo2.textContent == palabra.charAt(3) || parrafo2.textContent == palabra.charAt(4)) {
            parrafo2.classList.add("semiCorrecto");
        } else {
            parrafo2.classList.add("incorrecto");
        }

        // Tercera letra
        if (parrafo3.textContent == palabra.charAt(2)) {
            parrafo3.classList.add("correcto");
        } else if (parrafo3.textContent == palabra.charAt(0) || parrafo3.textContent == palabra.charAt(1) || parrafo3.textContent == palabra.charAt(3) || parrafo3.textContent == palabra.charAt(4)) {
            parrafo3.classList.add("semiCorrecto");
        } else {
            parrafo3.classList.add("incorrecto");
        }

        // Cuarta letra
        if (parrafo4.textContent == palabra.charAt(3)) {
            parrafo4.classList.add("correcto");
        } else if (parrafo4.textContent == palabra.charAt(0) || parrafo4.textContent == palabra.charAt(1) || parrafo4.textContent == palabra.charAt(2) || parrafo4.textContent == palabra.charAt(4)) {
            parrafo4.classList.add("semiCorrecto");
        } else {
            parrafo4.classList.add("incorrecto");
        }

        // Quinta letra
        if (parrafo.textContent == palabra.charAt(0) && parrafo2.textContent == palabra.charAt(1) && parrafo3.textContent == palabra.charAt(2) && parrafo4.textContent == palabra.charAt(3) && parrafo5.textContent == palabra.charAt(4)) {
            console.log("GANASTE!");
            const p = document.createElement('p');
            p.textContent = "¡GANASTE!";
            p.classList.add("correcto", "pb-t");
            titulo.appendChild(p);
            parrafo5.classList.add("correcto");
        } else if (parrafo5.textContent == palabra.charAt(4)) {
            parrafo5.classList.add("correcto");

        } else if (parrafo5.textContent == palabra.charAt(0) || parrafo5.textContent == palabra.charAt(1) || parrafo5.textContent == palabra.charAt(3) || parrafo5.textContent == palabra.charAt(2)) {
            parrafo5.classList.add("semiCorrecto");
        } else {
            parrafo5.classList.add("incorrecto");
        }
    }
}

// Segunda columna
function tecla2(e) {
    let letra = String.fromCharCode(e.keyCode);
    if (boton.disabled == true) {
        if (parrafo6.textContent == '') {
            parrafo6.textContent = letra;
        } else if (parrafo7.textContent == '') {
            parrafo7.textContent = letra;
        } else if (parrafo8.textContent == '') {
            parrafo8.textContent = letra;
        } else if (parrafo9.textContent == '') {
            parrafo9.textContent = letra;
        } else if (parrafo10.textContent == '') {
            parrafo10.textContent = letra;
            if (parrafo10.textContent != '') {
                boton.disabled = false;
                document.addEventListener("keypress", tecla3);
                boton.addEventListener('click', validarParrafo);
            }
        }
    }

    // Validar las respuestas
    function validarParrafo() {
        // Primera letra9
        if (parrafo6.textContent == palabra.charAt(0)) {
            parrafo6.classList.add("correcto");
        } else if (parrafo6.textContent == palabra.charAt(1) || parrafo6.textContent == palabra.charAt(2) || parrafo6.textContent == palabra.charAt(3) || parrafo6.textContent == palabra.charAt(4)) {
            parrafo6.classList.add("semiCorrecto");
        } else {
            parrafo6.classList.add("incorrecto");
        }

        // Segunda letra
        if (parrafo7.textContent == palabra.charAt(1)) {
            parrafo7.classList.add("correcto");
        } else if (parrafo7.textContent == palabra.charAt(0) || parrafo7.textContent == palabra.charAt(2) || parrafo7.textContent == palabra.charAt(3) || parrafo7.textContent == palabra.charAt(4)) {
            parrafo7.classList.add("semiCorrecto");
        } else {
            parrafo7.classList.add("incorrecto");
        }

        // Tercera letra
        if (parrafo8.textContent == palabra.charAt(2)) {
            parrafo8.classList.add("correcto");
        } else if (parrafo8.textContent == palabra.charAt(0) || parrafo8.textContent == palabra.charAt(1) || parrafo8.textContent == palabra.charAt(3) || parrafo8.textContent == palabra.charAt(4)) {
            parrafo8.classList.add("semiCorrecto");
        } else {
            parrafo8.classList.add("incorrecto");
        }

        // Cuarta letra
        if (parrafo9.textContent == palabra.charAt(3)) {
            parrafo9.classList.add("correcto");
        } else if (parrafo9.textContent == palabra.charAt(0) || parrafo9.textContent == palabra.charAt(1) || parrafo9.textContent == palabra.charAt(2) || parrafo9.textContent == palabra.charAt(4)) {
            parrafo9.classList.add("semiCorrecto");
        } else {
            parrafo9.classList.add("incorrecto");
        }

        // Quinta letra
        if (parrafo6.textContent == palabra.charAt(0) && parrafo7.textContent == palabra.charAt(1) && parrafo8.textContent == palabra.charAt(2) && parrafo9.textContent == palabra.charAt(3) && parrafo10.textContent == palabra.charAt(4)) {
            console.log("GANASTE!");
            const p = document.createElement('p');
            p.textContent = "¡GANASTE!";
            p.classList.add("correcto", "pb-t");
            titulo.appendChild(p);
            parrafo10.classList.add("correcto");
        } else if (parrafo10.textContent == palabra.charAt(4)) {
            parrafo10.classList.add("correcto");

        } else if (parrafo10.textContent == palabra.charAt(0) || parrafo10.textContent == palabra.charAt(1) || parrafo10.textContent == palabra.charAt(3) || parrafo10.textContent == palabra.charAt(2)) {
            parrafo10.classList.add("semiCorrecto");
        } else {
            parrafo10.classList.add("incorrecto");
        }
    }
}

// Tercera columna
function tecla3(e) {
    let letra = String.fromCharCode(e.keyCode);
    if (boton.disabled == true) {
        if (parrafo11.textContent == '') {
            parrafo11.textContent = letra;
        } else if (parrafo12.textContent == '') {
            parrafo12.textContent = letra;
        } else if (parrafo13.textContent == '') {
            parrafo13.textContent = letra;
        } else if (parrafo14.textContent == '') {
            parrafo14.textContent = letra;
        } else if (parrafo15.textContent == '') {
            parrafo15.textContent = letra;
            if (parrafo15.textContent != '') {
                boton.disabled = false;
                document.addEventListener("keypress", tecla4);
                boton.addEventListener('click', validarParrafo);
            }
        }
    }

    // Validar las respuestas
    function validarParrafo() {

        // Primera letra9
        if (parrafo11.textContent == palabra.charAt(0)) {
            parrafo11.classList.add("correcto");
        } else if (parrafo11.textContent == palabra.charAt(1) || parrafo11.textContent == palabra.charAt(2) || parrafo11.textContent == palabra.charAt(3) || parrafo11.textContent == palabra.charAt(4)) {
            parrafo11.classList.add("semiCorrecto");
        } else {
            parrafo11.classList.add("incorrecto");
        }

        // Segunda letra
        if (parrafo12.textContent == palabra.charAt(1)) {
            parrafo12.classList.add("correcto");
        } else if (parrafo12.textContent == palabra.charAt(0) || parrafo12.textContent == palabra.charAt(2) || parrafo12.textContent == palabra.charAt(3) || parrafo12.textContent == palabra.charAt(4)) {
            parrafo12.classList.add("semiCorrecto");
        } else {
            parrafo12.classList.add("incorrecto");
        }

        // Tercera letra
        if (parrafo13.textContent == palabra.charAt(2)) {
            parrafo13.classList.add("correcto");
        } else if (parrafo13.textContent == palabra.charAt(0) || parrafo13.textContent == palabra.charAt(1) || parrafo13.textContent == palabra.charAt(3) || parrafo13.textContent == palabra.charAt(4)) {
            parrafo13.classList.add("semiCorrecto");
        } else {
            parrafo13.classList.add("incorrecto");
        }

        // Cuarta letra
        if (parrafo14.textContent == palabra.charAt(3)) {
            parrafo14.classList.add("correcto");
        } else if (parrafo14.textContent == palabra.charAt(0) || parrafo14.textContent == palabra.charAt(1) || parrafo14.textContent == palabra.charAt(2) || parrafo14.textContent == palabra.charAt(4)) {
            parrafo14.classList.add("semiCorrecto");
        } else {
            parrafo14.classList.add("incorrecto");
        }

        // Quinta letra
        if (parrafo11.textContent == palabra.charAt(0) && parrafo12.textContent == palabra.charAt(1) && parrafo13.textContent == palabra.charAt(2) && parrafo14.textContent == palabra.charAt(3) && parrafo15.textContent == palabra.charAt(4)) {
            console.log("GANASTE!");
            const p = document.createElement('p');
            p.textContent = "¡GANASTE!";
            p.classList.add("correcto", "pb-t");
            titulo.appendChild(p);
            parrafo15.classList.add("correcto");
        } else if (parrafo15.textContent == palabra.charAt(4)) {
            parrafo15.classList.add("correcto");

        } else if (parrafo15.textContent == palabra.charAt(0) || parrafo15.textContent == palabra.charAt(1) || parrafo15.textContent == palabra.charAt(3) || parrafo15.textContent == palabra.charAt(2)) {
            parrafo15.classList.add("semiCorrecto");
        } else {
            parrafo15.classList.add("incorrecto");
        }
    }
}

// Cuarta columna
function tecla4(e) {
    let letra = String.fromCharCode(e.keyCode);
    if (boton.disabled == true) {
        if (parrafo16.textContent == '') {
            parrafo16.textContent = letra;
        } else if (parrafo17.textContent == '') {
            parrafo17.textContent = letra;
        } else if (parrafo18.textContent == '') {
            parrafo18.textContent = letra;
        } else if (parrafo19.textContent == '') {
            parrafo19.textContent = letra;
        } else if (parrafo20.textContent == '') {
            parrafo20.textContent = letra;
            if (parrafo20.textContent != '') {
                boton.disabled = false;
                document.addEventListener("keypress", tecla5);
                boton.addEventListener('click', validarParrafo);
            }
        }
    }

    // Validar las respuestas
    function validarParrafo() {

        // Primera letra9
        if (parrafo16.textContent == palabra.charAt(0)) {
            parrafo16.classList.add("correcto");
        } else if (parrafo16.textContent == palabra.charAt(1) || parrafo16.textContent == palabra.charAt(2) || parrafo16.textContent == palabra.charAt(3) || parrafo16.textContent == palabra.charAt(4)) {
            parrafo16.classList.add("semiCorrecto");
        } else {
            parrafo16.classList.add("incorrecto");
        }

        // Segunda letra
        if (parrafo17.textContent == palabra.charAt(1)) {
            parrafo17.classList.add("correcto");
        } else if (parrafo17.textContent == palabra.charAt(0) || parrafo17.textContent == palabra.charAt(2) || parrafo17.textContent == palabra.charAt(3) || parrafo17.textContent == palabra.charAt(4)) {
            parrafo17.classList.add("semiCorrecto");
        } else {
            parrafo17.classList.add("incorrecto");
        }

        // Tercera letra
        if (parrafo18.textContent == palabra.charAt(2)) {
            parrafo18.classList.add("correcto");
        } else if (parrafo18.textContent == palabra.charAt(0) || parrafo18.textContent == palabra.charAt(1) || parrafo18.textContent == palabra.charAt(3) || parrafo18.textContent == palabra.charAt(4)) {
            parrafo18.classList.add("semiCorrecto");
        } else {
            parrafo18.classList.add("incorrecto");
        }

        // Cuarta letra
        if (parrafo19.textContent == palabra.charAt(3)) {
            parrafo19.classList.add("correcto");
        } else if (parrafo19.textContent == palabra.charAt(0) || parrafo19.textContent == palabra.charAt(1) || parrafo19.textContent == palabra.charAt(2) || parrafo19.textContent == palabra.charAt(4)) {
            parrafo19.classList.add("semiCorrecto");
        } else {
            parrafo19.classList.add("incorrecto");
        }

        // Quinta letra
        if (parrafo16.textContent == palabra.charAt(0) && parrafo17.textContent == palabra.charAt(1) && parrafo18.textContent == palabra.charAt(2) && parrafo19.textContent == palabra.charAt(3) && parrafo20.textContent == palabra.charAt(4)) {
            console.log("GANASTE!");
            const p = document.createElement('p');
            p.textContent = "¡GANASTE!";
            p.classList.add("correcto", "pb-t");
            titulo.appendChild(p);
            parrafo20.classList.add("correcto");
        } else if (parrafo20.textContent == palabra.charAt(4)) {
            parrafo20.classList.add("correcto");

        } else if (parrafo20.textContent == palabra.charAt(0) || parrafo20.textContent == palabra.charAt(1) || parrafo20.textContent == palabra.charAt(3) || parrafo20.textContent == palabra.charAt(2)) {
            parrafo20.classList.add("semiCorrecto");
        } else {
            parrafo20.classList.add("incorrecto");
        }
    }
}

// Quinta columna
function tecla5(e) {
    let letra = String.fromCharCode(e.keyCode);
    if (boton.disabled == true) {
        if (parrafo21.textContent == '') {
            parrafo21.textContent = letra;
        } else if (parrafo22.textContent == '') {
            parrafo22.textContent = letra;
        } else if (parrafo23.textContent == '') {
            parrafo23.textContent = letra;
        } else if (parrafo24.textContent == '') {
            parrafo24.textContent = letra;
        } else if (parrafo25.textContent == '') {
            parrafo25.textContent = letra;
            if (parrafo25.textContent != '') {
                boton.disabled = false;
                boton.addEventListener('click', validarParrafo);
            }
        }
    }

    // Validar las respuestas
    function validarParrafo() {

        // Primera letra
        if (parrafo21.textContent == palabra.charAt(0)) {
            parrafo21.classList.add("correcto");
        } else if (parrafo21.textContent == palabra.charAt(1) || parrafo21.textContent == palabra.charAt(2) || parrafo21.textContent == palabra.charAt(3) || parrafo21.textContent == palabra.charAt(4)) {
            parrafo21.classList.add("semiCorrecto");
        } else {
            parrafo21.classList.add("incorrecto");
        }

        // Segunda letra
        if (parrafo22.textContent == palabra.charAt(1)) {
            parrafo22.classList.add("correcto");
        } else if (parrafo22.textContent == palabra.charAt(0) || parrafo22.textContent == palabra.charAt(2) || parrafo22.textContent == palabra.charAt(3) || parrafo22.textContent == palabra.charAt(4)) {
            parrafo22.classList.add("semiCorrecto");
        } else {
            parrafo22.classList.add("incorrecto");
        }

        // Tercera letra
        if (parrafo23.textContent == palabra.charAt(2)) {
            parrafo23.classList.add("correcto");
        } else if (parrafo23.textContent == palabra.charAt(0) || parrafo23.textContent == palabra.charAt(1) || parrafo23.textContent == palabra.charAt(3) || parrafo23.textContent == palabra.charAt(4)) {
            parrafo23.classList.add("semiCorrecto");
        } else {
            parrafo23.classList.add("incorrecto");
        }

        // Cuarta letra
        if (parrafo24.textContent == palabra.charAt(3)) {
            parrafo24.classList.add("correcto");
        } else if (parrafo24.textContent == palabra.charAt(0) || parrafo24.textContent == palabra.charAt(1) || parrafo24.textContent == palabra.charAt(2) || parrafo24.textContent == palabra.charAt(4)) {
            parrafo24.classList.add("semiCorrecto");
        } else {
            parrafo24.classList.add("incorrecto");
        }

        // Quinta letra
        if (parrafo21.textContent == palabra.charAt(0) && parrafo22.textContent == palabra.charAt(1) && parrafo23.textContent == palabra.charAt(2) && parrafo24.textContent == palabra.charAt(3) && parrafo25.textContent == palabra.charAt(4)) {
            console.log("GANASTE!");
            const p = document.createElement('p');
            p.textContent = "¡GANASTE!";
            p.classList.add("correcto", "pb-t");
            titulo.appendChild(p);
            parrafo25.classList.add("correcto");
        } else if (parrafo25.textContent == palabra.charAt(4)) {
            parrafo25.classList.add("correcto");

        } else if (parrafo25.textContent == palabra.charAt(0) || parrafo25.textContent == palabra.charAt(1) || parrafo25.textContent == palabra.charAt(3) || parrafo25.textContent == palabra.charAt(2)) {
            parrafo25.classList.add("semiCorrecto");
        } else {
            parrafo25.classList.add("incorrecto");
        }
        
        if (parrafo21.textContent != palabra.charAt(0) || parrafo22.textContent != palabra.charAt(1) || parrafo23.textContent != palabra.charAt(2) || parrafo24.textContent != palabra.charAt(3) || parrafo25.textContent != palabra.charAt(4)) {
            console.log("PERDISTE!");
            const p = document.createElement('p');
            p.textContent = "¡PERDISTE!";
            p.classList.add("incorrecto", "pb-t");
            titulo.appendChild(p);
            parrafo25.classList.add("incorrecto");
        }
    }
}

function botonEvent() {
    console.log("Presionaste");
    boton.disabled = true;
}
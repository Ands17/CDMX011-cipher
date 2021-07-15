
import cipher from './cipher.js';
//import {encode, decode} from'./cipher.js';

//Invocar boton encriptar
const btnEncriptar = document.getElementById("encriptar");
btnEncriptar.addEventListener("click", function () {

let offset = document.getElementById("desplazamiento").value;
let string = document.getElementById("mensaje").value;
let newCifrado = cipher.encode(offset, string);
 document.getElementById ("resultado"). value = newCifrado

});

//invocar boton desencriptar
const btnDecifrar = document.getElementById("decifrar");
btnDecifrar.addEventListener("click", mostrarMensaje2);
function mostrarMensaje2 (){
let offset = document.getElementById("desplazamiento").value;
let string = document.getElementById("mensaje").value;
let newDecifrado = cipher.decode (offset, string);

document.getElementById ("resultado"). value= newDecifrado

}

//Boton Borrar
const btnBorrar = document.getElementById ("borrar")
btnBorrar.addEventListener("click", borrar);
function borrar() {
    document.getElementById("mensaje").value= ""
	document.getElementById ("resultado"). value= ""
	document.getElementById("desplazamiento").value = ""
}

//Boton copiar
const btnCopiar = document.getElementById ("copiar")
btnCopiar.addEventListener("click", copiar);
function copiar() {
	let contenido = document.getElementById ("resultado")
	contenido.select()
    document.execCommand('copy');

}






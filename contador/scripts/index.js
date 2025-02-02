import { Contador } from "./contador.js";

const partidaEnMemoria = JSON.parse(localStorage.getItem("truco"));
const p1Nombre = "Nosotros";
const p2Nombre = "Ellos";
const modal = document.querySelector("dialog");

const p1 = new Contador(
    p1Nombre,
    document.getElementById("jugador1Container"),
    partidaEnMemoria && partidaEnMemoria[p1Nombre] ? partidaEnMemoria[p1Nombre] : 0
);
const p2 = new Contador(
    p2Nombre,
    document.getElementById("jugador2Container"),
    partidaEnMemoria && partidaEnMemoria[p2Nombre] ? partidaEnMemoria[p2Nombre] : 0
);

document.querySelector("#reset").addEventListener("click", ()=> modal.showModal())
document.querySelector("#volver").addEventListener("click",()=> modal.close())
document.querySelector("#aceptar").addEventListener("click",()=> {
    p1.reset();
    p2.reset();
    modal.close()
})

document.querySelectorAll("button").forEach(button => button.addEventListener("click", guardarPartida))
function guardarPartida(){
    const partidaGuardar = {
        [p1Nombre] : p1.numero,
        [p2Nombre] : p2.numero,
    }
    localStorage.setItem("truco", JSON.stringify(partidaGuardar));
}

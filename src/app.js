/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["♦", "♥", "♠", "♣"];
const cifra = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

let arribaPalo = document.querySelector("#arribaPalo");
let numero = document.querySelector("#numero");
let abajoPalo = document.querySelector("#abajoPalo");

function generadorCarta(palos, cifra) {
  let paloSeleccion = Math.floor(Math.random() * palos.length);
  let cifraSeleccion = Math.floor(Math.random() * cifra.length);
  arribaPalo.innerText = palos[paloSeleccion];
  abajoPalo.innerText = palos[paloSeleccion];
  numero.innerText = cifra[cifraSeleccion];

  if (paloSeleccion <= 1) {
    arribaPalo.style.color = "red";
    abajoPalo.style.color = "red";
  } else {
    arribaPalo.style.color = "black";
    abajoPalo.style.color = "black";
    numero.style.color = "black";
  }
}

window.onload = function() {
  generadorCarta(palos, cifra);
};

document.querySelector(".btn").addEventListener("click", () => {
  generadorCarta(palos, cifra);
});

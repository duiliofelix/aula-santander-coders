let numero = 10;

let tagDisplay = document.getElementById("display");
tagDisplay.innerText = numero;

function setarZero() {
    numero = 0;
    tagDisplay.innerText = 0;
}

function setarUm() {
    numero = 1;
    tagDisplay.innerText = 1;
}

function setarDois() {
    numero = 2;
    tagDisplay.innerText = 2;
}

function adicionarUm() {
    numero = numero + 1;
    tagDisplay.innerText = numero;
}
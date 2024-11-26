let votoBranco = false;

function clicouBranco() {
    document.getElementById('foto').innerHTML = "<img src='img/branco.jpg' alt='foto do branco'>";
    document.getElementById('nome').innerHTML = "Voto Branco";

    votoBranco = true;
    limpaCampos();
}

function clicouCorrige() {
    limpaCampos();
    atualizarFoto();
    votoBranco = false;
}

function clicouConfirma() {
    let valor1 = document.getElementById("campo1").value;
    let valor2 = document.getElementById("campo2").value;

    const numeroCandidato = `${valor1}${valor2}`;
    
    if (numeroCandidato === "42" || numeroCandidato === "22") {
        let votos = parseInt(localStorage.getItem(numeroCandidato)) || 0;
        localStorage.setItem(numeroCandidato, votos + 1);
    } else if (numeroCandidato.length === 2) {
        let votosNulo = parseInt(localStorage.getItem('nulo-governador')) || 0;
        localStorage.setItem('nulo-governador', votosNulo + 1);
    } else if (votoBranco) {
        let votosBranco = parseInt(localStorage.getItem('branco-governador')) || 0;
        localStorage.setItem('branco-governador', votosBranco + 1);
    } else {
        alert("Voto inválido! Certifique-se de escolher um número válido.");

        return;
    }

    limpaCampos();
    limpaTela();

    let audio = document.getElementById("som-confirmacao");
    audio.play();

    setTimeout(() => {
        window.location.href = "resultados_governador.html";
    }, 1500);
}


function clicou(valor) {
    if (votoBranco) {
        clicouCorrige();
    }

    let audio = document.getElementById("som-numeracao");
    audio.play();
    let valor1 = document.getElementById("campo1").value;
    let valor2 = document.getElementById("campo2").value;

    if (valor1 === "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 === "") {
        document.getElementById("campo2").value = valor;
    }
    
    atualizarFoto();
}

function atualizarFoto() {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;


    if (valor1 === '4' && valor2 === '2') {
        document.getElementById('foto').innerHTML = "<img src='img/candidatos/governadora2.jpg' alt='foto governadora'>";
        document.getElementById('nome').innerHTML = "Governadora Carina - Partido PL";
    } else if (valor1 === '2' && valor2 === '2') {
        document.getElementById('foto').innerHTML = "<img src='img/candidatos/governadorTJ.jpeg' alt='foto governador'>";
        document.getElementById('nome').innerHTML = "Governador Luiz - Partido TJ";
    } else if (valor1 !== '' && valor2 !== '') {
        document.getElementById('foto').innerHTML = "<img src='img/nulo.jpeg' alt='foto de nulo'>";
        document.getElementById('nome').innerHTML = "Voto Nulo";
    } else {
        document.getElementById('foto').innerHTML = "";
        document.getElementById('nome').innerHTML = "";
    }
}

function limpaCampos() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function limpaTela() {
    document.getElementById('foto').innerHTML = "";
    document.getElementById('nome').innerHTML = "";
    document.getElementById('nome').style.fontSize = '';
}

document.getElementById('foto').innerHTML = "";

const elemento = document.getElementById('foto1');

setInterval(() => {
    if (elemento.style.visibility === 'hidden') {
        elemento.style.visibility = 'visible';
    } else {
        elemento.style.visibility = 'hidden';
    }
}, 500);

function resultado() {
    document.getElementById("resultado").innerHTML = "";
    for (let i = 0; i < 100; i++) {
        if (localStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "candidato " + i + " tem " + localStorage.getItem(i) + " votos<br/>";
        }
    }
    let totalVotosBrancos = localStorage.getItem('branco') || 0;
    document.getElementById("resultado").innerHTML += "votos em branco: " + totalVotosBrancos;
}

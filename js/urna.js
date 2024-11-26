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
    let valor3 = document.getElementById("campo3").value;
    let valor4 = document.getElementById("campo4").value;
    let valor5 = document.getElementById("campo5").value;

    const numeroCandidato = `${valor1}${valor2}${valor3}${valor4}${valor5}`;

    if (numeroCandidato === "45002" || numeroCandidato === "45008") {
        let votos = parseInt(localStorage.getItem(numeroCandidato)) || 0;
        localStorage.setItem(numeroCandidato, votos + 1);
    }  else if (numeroCandidato.length === 5) {
        let votosNulo = parseInt(localStorage.getItem('nulo-vereador')) || 0;
        localStorage.setItem('nulo-vereador', votosNulo + 1);
    } else if (votoBranco) {
        let votosBranco = parseInt(localStorage.getItem('branco-vereador')) || 0;
        localStorage.setItem('branco-vereador', votosBranco + 1);
    } else {
        alert("Voto inválido! Certifique-se de escolher um número válido.");

        return;
    }

    limpaCampos();
    limpaTela();
    let audio = document.getElementById("som-confirmacao");
    audio.play();

    setTimeout(() => {
        window.location.href = "resultados_vereador.html";
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
    let valor3 = document.getElementById("campo3").value;
    let valor4 = document.getElementById("campo4").value;
    let valor5 = document.getElementById("campo5").value;


    if (valor1 === "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 === "") {
        document.getElementById("campo2").value = valor;
    }else if (valor3 === "") {
        document.getElementById("campo3").value = valor;
    }else if (valor4 === "") {
        document.getElementById("campo4").value = valor;
    }else if (valor5 === "") {
        document.getElementById("campo5").value = valor;
        atualizarFoto();
    }
}

function atualizarFoto() {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;
    var valor3 = document.getElementById("campo3").value;
    var valor4 = document.getElementById("campo4").value;
    var valor5 = document.getElementById("campo5").value;


    if (valor1 === '4' && valor2 === '5' && valor3 === '0' && valor4 === '0' && valor5 === '2') {
        document.getElementById('foto').innerHTML = "<img src='img/candidatos/vereador1.jpg' alt='foto vereador'>";
        document.getElementById('nome').innerHTML = "Vereador José - Partido PL";
    } else if (valor1 === '2' && valor2 === '4' && valor3 === '0' && valor4 === '0' && valor5 === '7') {
        document.getElementById('foto').innerHTML = "<img src='img/candidatos/vereadorTJ.png' alt='foto vereador'>";
        document.getElementById('nome').innerHTML = "Vereador Leonardo - Partido TJ";
    } else if (valor1 === '4' && valor2 === '5' && valor3 === '0' && valor4 === '0' && valor5 === '8') {
        document.getElementById('foto').innerHTML = "<img src='img/candidatos/vereadoraPL.jpeg' alt='foto vereador'>";
        document.getElementById('nome').innerHTML = "Vereadora Cláudia - Partido TJ";
    } else if (valor1 === '2' && valor2 === '4' && valor3 === '0' && valor4 === '0' && valor5 === '4') {
        document.getElementById('foto').innerHTML = "<img src='img/candidatos/vereador2TJ.jpg' alt='foto vereador'>";
        document.getElementById('nome').innerHTML = "Vereador Marcelo - Partido TJ";
    }else if (valor1 !== '' && valor2 !== '') {
        document.getElementById('foto').innerHTML = "<img src='img/nulo.jpeg' alt='foto de nulo'>";
        document.getElementById('nome').innerHTML = "Voto Nulo.";
        document.getElementById('nome').style.fontSize = '20px';
        document.getElementById('nome').style.marginLeft = '10px';
    } else {
        document.getElementById('foto').innerHTML = "";
        document.getElementById('nome').innerHTML = "";
    }
}

function limpaCampos() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("campo3").value = "";
    document.getElementById("campo4").value = "";
    document.getElementById("campo5").value = "";
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

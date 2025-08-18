var carta1 = document.getElementById('carta1');
carta1.addEventListener('click', function CliqueCarta1() {
    var resposta1 = document.getElementById('resposta1');

    resposta1.innerHTML = 'Carta clicada!';
    
    var frente = 'lightblue';

    carta1.style.backgroundColor = frente;

    verificarPares();
})

var carta2 = document.getElementById('carta2');
carta2.addEventListener('click', function CliqueCarta2() {
    var resposta2 = document.getElementById('resposta2');   

    resposta2.innerHTML = 'Carta clicada!';
    
    var frente = 'lightblue';

    carta2.style.backgroundColor = frente;

    verificarPares();
})

var carta3 = document.getElementById('carta3');
carta3.addEventListener('click', function CliqueCarta3() {
    var resposta3 = document.getElementById('resposta3');

    resposta3.innerHTML = 'Carta clicada!';
    
    var frente = 'lightblue';

    carta3.style.backgroundColor = frente;

    verificarPares();
})

var carta4 = document.getElementById('carta4');
carta4.addEventListener('click', function CliqueCarta4() {
    var resposta4 = document.getElementById('resposta4');

    resposta4.innerHTML = 'Carta clicada!';
    
    var frente = 'lightblue';

    carta4.style.backgroundColor = frente;

    verificarPares();
})

function verificarPares() {
    var resultado = document.getElementById('resultado');

    if (carta1.style.backgroundColor === carta2.style.backgroundColor ) {
        resultado.innerHTML = 'Par correto!';
        carta1.style.backgroundColor = 'lightgreen';
        carta2.style.backgroundColor = 'lightgreen';

    } else if (carta3.style.backgroundColor === carta4.style.backgroundColor) {
        resultado.innerHTML = 'Par correto!';
        carta3.style.backgroundColor = 'lightgreen';
        carta4.style.backgroundColor = 'lightgreen';

    } else if (carta1.style.backgroundColor === carta3.style.backgroundColor) {
        resultado.innerHTML = 'Tente novamente.';
        carta1.style.backgroundColor = 'red';
        carta3.style.backgroundColor = 'red';
    } else if (carta1.style.backgroundColor === carta4.style.backgroundColor) {
        resultado.innerHTML = 'Tente novamente.';
        carta1.style.backgroundColor = 'red';
        carta4.style.backgroundColor = 'red';
    } else if (carta2.style.backgroundColor === carta3.style.backgroundColor) {
        resultado.innerHTML = 'Tente novamente.';
        carta2.style.backgroundColor = 'red';
        carta3.style.backgroundColor = 'red';
    } else if (carta2.style.backgroundColor === carta4.style.backgroundColor) {
        resultado.innerHTML = 'Tente novamente.';
        carta2.style.backgroundColor = 'red';
        carta4.style.backgroundColor = 'red';
    } else {
        resultado.innerHTML = 'Tente novamente.';
        carta1.style.backgroundColor = 'red';
        carta2.style.backgroundColor = 'red';
        carta3.style.backgroundColor = 'red';
        carta4.style.backgroundColor = 'red';
    }
}
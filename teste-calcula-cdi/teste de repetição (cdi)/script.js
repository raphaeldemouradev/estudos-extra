const botao = document.getElementById('botao');
botao.addEventListener('click', function() {
    var res = document.getElementById('resultado');
    var numeroInfo = document.getElementById('numeroInfo');
    var repeticoesInfo = document.getElementById('repeticoesInfo');

    const num = Number(numeroInfo.value)
    const repeticoes = Number(repeticoesInfo.value);
    
    for (var i = num; i <= repeticoes; i++) {
        
        res.innerHTML += `${i} <br>`;
    }
})
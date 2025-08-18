var gera = document.getElementById('gerador')
gera.addEventListener('click', function gerador() {
    var res = document.getElementById('res')

    var elementos = ['0', '1', '2']
    var MeusNumeros = Math.floor(Math.random() * elementos.length)

    res.innerHTML = MeusNumeros
})



var geranome = document.getElementById('geradornome')
geranome.addEventListener('click', function geradornome() {
    var resposta = document.getElementById('resposta')

    var elementos = ['Corinthians', 'Flamengo', 'Vasco']
    var numeros = Math.floor(Math.random() * elementos.length)
    var MeusNomes = elementos[numeros]

    resposta.innerHTML = MeusNomes
})
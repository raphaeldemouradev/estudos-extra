const bancoDeObjeto = {}

let id = 1

const enviar = document.querySelector("#enviar");
enviar.addEventListener('click', () => {
    const nome = document.querySelector("#iname").value;
    const idade = document.querySelector("#iage").value;

    console.log(nome)
    console.log(idade)

    bancoDeObjeto[id] = {
        name: nome, 
        age: idade
    }
    id++

    console.log(bancoDeObjeto)
})
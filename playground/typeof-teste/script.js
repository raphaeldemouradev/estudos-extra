const testar = document.querySelector("#testar");
testar.addEventListener("click", () => {
    const nome = document.querySelector("#iname").value;
    const age = document.querySelector("#iage").value;

    console.log(typeof nome); //string
    console.log(typeof age); //string
})


var x = 1
var y = 'Olá'

console.log(typeof x)
console.log(typeof y)

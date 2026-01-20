// Params func
const desconto = 10
const valor = 10

function Calculando(valor = 10, desconto = 10) {
    const calc = valor - desconto;
    console.log("Resultado: " + calc);
}; 
Calculando(valor, desconto); //receba e devolva


function Somando(valor = 10, desconto = 10) {
    const soma = valor + desconto;
    console.log("Resultado: " + soma);
};
Somando(valor, desconto);
// Prams func

// Arrow Func
const sayHello = () => {
    console.log(`Hello from Arrow Function !`);
}
// Arrow Func

// Argumento obj

function FuncArg() {
    const passa = 30;
    const info = 40;

    const result = passa + info

    return result
};

function ReceboArg(result) {
    console.log(result)
}
ReceboArg(FuncArg())

// Argumento obj

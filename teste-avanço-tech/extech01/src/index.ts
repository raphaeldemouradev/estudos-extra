const pao = document.getElementById("pao") as HTMLButtonElement;
pao?.addEventListener("click", function() {

    meuPedido.push("pao");
});

const queijo = document.getElementById("queijo") as HTMLButtonElement;
queijo?.addEventListener("click", function() {

    meuPedido.push("queijo");
});

const mortandela = document.getElementById("mortandela") as HTMLButtonElement;
mortandela?.addEventListener("click", function() {

    meuPedido.push("mortandela");
});


const finalizar = document.getElementById("finalizar") as HTMLButtonElement;
finalizar.addEventListener('click', function() {

    console.log(`Clicou em ${meuPedido.join(", ")}`);
});

let meuPedido: string[] = [];
var pao = document.getElementById("pao");
pao === null || pao === void 0 ? void 0 : pao.addEventListener("click", function () {
    meuPedido.push("pao");
});
var queijo = document.getElementById("queijo");
queijo === null || queijo === void 0 ? void 0 : queijo.addEventListener("click", function () {
    meuPedido.push("queijo");
});
var mortandela = document.getElementById("mortandela");
mortandela === null || mortandela === void 0 ? void 0 : mortandela.addEventListener("click", function () {
    meuPedido.push("mortandela");
});
var finalizar = document.getElementById("finalizar");
finalizar === null || finalizar === void 0 ? void 0 : finalizar.addEventListener('click', function () {
    var res = document.getElementById("res");
    res.innerHTML = meuPedido.join(", ");
    console.log("Clicou em ".concat(meuPedido.join(", ")));
});
var meuPedido = [];

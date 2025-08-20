const calcular = document.querySelector('#calcular');
calcular.addEventListener('click', function calc() {
    const resultado = document.querySelector('.resultado');

    const investimento = document.querySelector('#investimento');
    const aporte = document.querySelector('#aporte');
    const periodo = document.querySelector('#periodo');
    const taxa = document.querySelector('#taxa');

    const investimentoNum = Number(investimento.value);
    const aporteNum = Number(aporte.value);
    const periodoNum = Number(periodo.value);
    const taxaNum = 100

    const rendimento = investimentoNum / taxaNum
    const contaFinal = investimentoNum + aporteNum + rendimento

    resultado.innerHTML = `R$ ${contaFinal}`
})
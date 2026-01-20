const x = 10
const y = 10
// throw | força o funcionamento | erros

try {
    if (x == y) {
        console.log(x + y)
        throw "Erro de conta"
    } else {
        console.log(`A soma é: ${x + y}`)
    }
} catch (error) {
    console.error("Erro de conta")
}
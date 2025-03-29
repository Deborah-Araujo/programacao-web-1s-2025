function somar(a, b) {
    return Number(a) + Number(b)
}

function subtrair(a, b) {
    return Number(a) - Number(b)
}

function multiplicar(a, b) {
    return Number(a) * Number(b)
}

function dividir(a, b) {
    if (b == 0) {
        return `Não há como dividir um número por 0 :D`
    } else {
        return String(Number(a) / Number(b))
    }
}

module.exports = {
    somar,subtrair,multiplicar,dividir
}
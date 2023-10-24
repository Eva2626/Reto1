

function calculadoraResta(operacion, op1, op2) {

    let resultadoResta;

    if (operacion == "subst") {
        resultadoResta = op1 - op2
    }

    return resultadoResta
}



function calculadoraMultiplicacion(operacion, op1, op2) {

    let resultadoMult;

    if (operacion == "mult") {
        resultadoMult = op1 * op2
    }

    return resultadoMult
}



function calculadoraDivision(operacion, op1, op2) {

    let resultadoDiv;

    if (operacion == "div") {
        resultadoDiv = op1 / op2
    }

    return resultadoDiv
}

function cuadrado(numero) {
    let resultado = numero * numero
    return resultado
}

function calculadoraCuadrado(operacion, op1) {

    let resultadoCuadrado;

    if (operacion == "cuadrado") {
        resultadoCuadrado = op1^2//elevado a 2
    }

    return resultadoCuadrado
}

module.exports = { calculadoraSuma, calculadoraResta, calculadoraMultiplicacion, calculadoraDivision }

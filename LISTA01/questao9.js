function contarParesEImpares(numeros) {
    let pares = 0;
    let impares = 0;
    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });
    return {pares, impares};  
}
let numeros = [1, 2, 3, 4, 5, 6];
let resultado = (contarParesEImpares(numeros));
console.log(`patres: ${resultado.pares}, impares: ${resultado.impares}`);


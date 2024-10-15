function somaNotas(notasRecebida) {
    let resultado = 0;
    notasRecebida.forEach(nota => {
        resultado += nota;
        
    });
    console.log(`nota é: ${resultado.toFixed(2)}`)
}
let notasTodas = [8,5,9,10,5];
somaNotas(notasTodas);


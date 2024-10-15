function contarOcorrencias(ocorrencias, palavra) {
    let resultado = 0;
    for (let teste of ocorrencias) {
        if (teste.includes(palavra)) {
            resultado++;  
        }
    }
    console.log(`a palavra:${palavra} aparece ${resultado} vezes`)
}
let palavras = ['estrutura', 'joel', 'ufrn', 'joel'];
let palavraBuscar = 'joel';
contarOcorrencias(palavras, palavraBuscar);







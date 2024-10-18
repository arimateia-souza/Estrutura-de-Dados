function transporMatriz(matriz) {
    let matrizTransposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        let novaLinha = []; 
        for (let j = 0; j < matriz.length; j++) {
            novaLinha.push(matriz[j][i]);  
        }
        matrizTransposta.push(novaLinha);  
    }
    return matrizTransposta
}
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
    ];
    
console.log(transporMatriz(matriz));

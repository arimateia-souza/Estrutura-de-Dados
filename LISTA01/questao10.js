function matrizIdentidade(numeroIdent) {
    let matriz = []; 
    for (let i = 0; i < numeroIdent; i++) {
        let linha = [];    
        for (let j = 0; j < numeroIdent; j++) {
            if (i === j) {
                linha.push(1);  
            } else {
                linha.push(0);  
            }
        }
        matriz.push(linha);
    }   
    return matriz;
}
console.log(matrizIdentidade(3));

function inverterVetor(palavra) {
    let invertida = [];
    for (let i = palavra.length -1;i>=0;i--){
        //console.log(palavra)
        //console.log(invertida)
        invertida.push(palavra[i]);
    }

    return invertida;
}
let nomes = ['diversao', 'tads', 'ufrn', 'joel'];
console.log(inverterVetor(nomes));


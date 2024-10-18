function unirVetores(produtos1, produtos2) {
    let uniao = produtos1;
    for (let i = 0; i < produtos2.length; i++){
        if (!uniao.includes(produtos2[i])) {
            uniao.push(produtos2[i]);
        }   
    }
    return uniao;  
}
let produtos1 = ["Mouse", "Teclado"];
let produtos2 = ["Teclado", "Monitor", "Impressora"];
console.log(unirVetores(produtos1, produtos2));

function buscarProduto(produtos, busca) {
    let buscaUpper = busca.toUpperCase();
    //console.log(buscaUpper);
    for (let produto of produtos) {
        let produtosUpper = produto.toUpperCase();
        //console.log(produtosUpper);
        if (produtosUpper.includes(buscaUpper)) {
            return true; 
        }   
    }
    return false;  
}
let produtos = ["Mouse", "Teclado", "Monitor"];
console.log(buscarProduto(produtos, "Teclado"));
console.log(buscarProduto(produtos, "bicicleta"));


function calcularDeterminante(matriz) {
   
    let a = matriz[0][0];
    let b = matriz[0][1];
    let c = matriz[1][0];
    let d = matriz[1][1];
//****(a * d) - (b * c)****//
    return (a * d) - (b * c);
}

let matriz =
    [[3, 2],
    [1, 4]];
console.log(calcularDeterminante(matriz)); 

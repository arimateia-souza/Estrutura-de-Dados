function mediaNotas(notasRecebidas) {
    let qtdNotas = 0;
    let media = 0;
    let alunosMedia = 0;
    notasRecebidas.forEach(nota => {
        qtdNotas++;
        media += nota;
        if (nota >= 6) {
            alunosMedia++
        }
        
    });
    return {media:media, qtdNotas, alunosMedia}
}
let notas = [4,6,8,4,7,5.6];
let resultado = mediaNotas(notas);
let palavra;
palavra = resultado.alunosMedia >1 ? 'alunos' : 'aluno'
console.log(`a media das ${resultado.qtdNotas} notas é: ${(resultado.media).toFixed(1)} e ${(resultado.alunosMedia)} ${palavra} estão na media`);

//console.log(`a media das ${qtdNotas} notas é:${(media/qtdNotas).toFixed(2)} `)
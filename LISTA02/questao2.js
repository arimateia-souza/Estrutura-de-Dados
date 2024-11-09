/*Questão 02: Implemente uma pilha em JavaScript que simule a funcionalidade de "desfazer" (undo) em um editor de texto. A cada nova ação
(como escrever uma palavra), ela deve ser armazenada na pilha. Quando o usuário clicar no botão "desfazer", a última ação realizada deve
ser removida da pilha e o estado anterior do texto deve ser restaurado.*/

class Pilha {

    constructor(tam = 10) {
      this.dados = [];
      this.topo = 0;
      this.tam = tam;
      this.currentText = "";
    }
    addPalavra(palavra) {
      if (!this.isFull()) {
        this.dados[this.topo++] = this.currentText;
        this.currentText += palavra;
        return;
      }
      throw new Error("Stackoverflow - Pilha ta cheia");
    }
  
    undo() {
      if (!this.isEmpty()) {
        this.currentText = this.dados[--this.topo];
        return;
      }
      throw new Error("Stackunderflow - Pilha vazia");
    }
  
    getTexto() {
      return this.currentText;
    }
  

  
    size() {
      return this.topo;
    }
  
    isEmpty() {
      return this.size() === 0;
    }

    isFull() {
      return this.size() === this.tam;
    }
  
  }
  
  export default Pilha;
  


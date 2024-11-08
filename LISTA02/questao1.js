/*Construa os seguintes códigos para as questões (Enviar link do github)
Questão 01: Implemente uma pilha em JavaScript que armazene nomes de clientes em uma fila de atendimento de um serviço. A cada novo cliente que chega, ele é adicionado ao topo da pilha, e quando o serviço atende um cliente, ele é removido da pilha. A pilha deve ter as seguintes operações:

Adicionar cliente (push)
Remover cliente (pop)
Verificar o próximo cliente a ser atendido (peek)
Verificar se há clientes na fila (isEmpty)
*/

class PilhaClientes {
    constructor(tam = 5) {
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }
    push(cliente) {
        if (!this.isFull()) {
            //se nao ta cheia, adiciona no topo
            this.dados[this.topo++] = cliente;
            return;
        }
        throw new Error("Stackoverflow - Pilha cheia");
    }

    pop() {
        if (!this.isEmpty()) {
            return this.dados[--this.topo];
        }
        throw new Error("Stackunderflow - Pilha vazia");
    }


    isEmpty() {
        return this.topo === 0;
    }


    peek() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1];
        }
        return null;
    }


    size() {
        return this.topo;
    }

    isFull() {
        return this.topo === this.tam;
    }
}

export default PilhaClientes;

  
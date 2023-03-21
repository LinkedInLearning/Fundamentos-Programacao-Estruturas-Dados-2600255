class No {
    constructor(dado) {
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    adicionar(dado) {
        const novoNo = new No(dado);

        if (!this.cabeca) {
            this.cabeca = novoNo;
            return;
        }

        let atual = this.cabeca;
        while (atual.proximo) {
            atual = atual.proximo;
        }

        atual.proximo = novoNo;
    }

    inserirNoInicio(dado) {
        const novoNo = new No(dado);
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
    }

    inserirNaPosicao(posicao, dado) {
        const novoNo = new No(dado);
        let atual = this.cabeca;
        let anterior = null;
        let indice = 0;

        if (posicao === 0) {
            this.inserirNoInicio(dado);
            return;
        }

        while (atual && indice < posicao) {
            anterior = atual;
            atual = atual.proximo;
            indice++;
        }

        novoNo.proximo = atual;
        anterior.proximo = novoNo;
    }

    remover(dado) {
        if (!this.cabeca) {
            return;
        }

        if (this.cabeca.dado === dado) {
            this.cabeca = this.cabeca.proximo;
            return;
        }

        let atual = this.cabeca;
        let anterior = null;

        while (atual && atual.dado !== dado) {
            anterior = atual;
            atual = atual.proximo;
        }

        if (!atual) {
            return;
        }

        anterior.proximo = atual.proximo;
    }
}

// Criação da lista encadeada e testes dos métodos
var lista = new ListaEncadeada()
lista.adicionar(1) // [1]
lista.inserirNoInicio(2) // [2, 1]
lista.inserirNaPosicao(1, 3) // [2, 3, 1]
lista.remover(1) // [2, 3]

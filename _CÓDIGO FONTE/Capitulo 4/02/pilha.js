    class Stack {
    constructor() {
        this.itens = [];
    }

    estaVazio() {
        return this.itens.length === 0;
    }

    push(item) {
        this.itens.push(item);
    }

    pop() {
        if (!this.estaVazio()) {
        return this.itens.pop();
        }
    }

    peek() {
        if (!this.estaVazio()) {
        return this.itens[this.itens.length - 1];
        }
    }

    tamanho() {
        return this.itens.length;
    }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
verUltimoItem = stack.peek();
pegarUltimoItem = stack.pop();

console.log("stack tem " + stack.tamanho() + " items");



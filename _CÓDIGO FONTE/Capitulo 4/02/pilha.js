    class Stack {
    constructor() {
        this.items = [];
    }

    estaVazio() {
        return this.items.length === 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.estaVazio()) {
        return this.items.pop();
        }
    }

    peek() {
        if (!this.estaVazio()) {
        return this.items[this.items.length - 1];
        }
    }

    tamanho() {
        return this.items.length;
    }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
verUltimoItem = stack.peek();
pegarUltimoItem = stack.pop();

console.log("stack tem " + stack.tamanho() + " items");



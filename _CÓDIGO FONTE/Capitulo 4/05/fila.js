class Fila {
    constructor() {
      this.itens = [];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    enfileirar(item) {
      this.itens.push(item);
    }
  
    desenfileirar() {
      if (!this.estaVazia()) {
        return this.itens.shift();
      }
    }
  
    peek() { 
        if (!this.estaVazia()) {
            return this.itens[this.itens.length - 1];
        }
    }

    tamanho() {
      return this.itens.length;
    }
  }
  
const fila = new Fila();

fila.enfileirar(1);
fila.enfileirar(2);
fila.enfileirar(3);

verUltimoItem = fila.peek();
pegarUltimoItem = fila.desenfileirar();

console.log("fila tem " + fila.tamanho() + " items");
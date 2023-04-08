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
            return this.itens[0];
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

var verPrimeiroItem = fila.peek();
var pegarPrimeiroItem = fila.desenfileirar();

console.log("fila tem " + fila.tamanho() + " items");
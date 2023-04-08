// Vetor vazio
var frutas = [];

// Push (adicionar ao final)
frutas.push("Maçã");

// Criar outro vetor
var outras_frutas = ["Banana", "Limão", "Laranja", "Uva", "Abacate"];

// Concatenar um vetor com outro
frutas = frutas.concat(outras_frutas);

// Pop (remover último elemento)
frutas.pop();

// Splice - remover do índice 2, 1 elemento
frutas.splice(2, 1);

// Fazer busca pelo item. Resultado é o seu índice. 
const indice = frutas.indexOf("Uva");

// Verificar o índice 
if (indice == -1) {
    // -1 significa que o item não foi encontrado
    console.log("Valor não encontrado");
} else { 
    // Remover item com valor 'Maçã'
    frutas.splice(indice, 1);
}

// Push (colocar no final)
frutas.push("Maracujá")

// Inserir no índice 2 o valor 'Pera' removendo 0 ítens
frutas.splice(2, 0, "Pera");

// Inserir no índice 1 o valor 'Jabuticaba' removendo 2 ítens
frutas.splice(1, 2, "Jabuticaba");

// Reverse - inverter a ordem
frutas.reverse();

// Sort - ordenar
frutas.sort();

console.log(frutas)


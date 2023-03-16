var idades = [21, 32, 19, 45, 27];

console.log("Item no índice 2: " + idades[2]);

console.log("Número de ítens: " + idades.length);

var soma = 0;

for (var i = 0; i < idades.length; i++) {
    soma += idades[i];
}

console.log("Soma: " + soma);

console.log("Média: " + total / idades.length);

// ERRO FORÇADO
// console.log(idades[100]);

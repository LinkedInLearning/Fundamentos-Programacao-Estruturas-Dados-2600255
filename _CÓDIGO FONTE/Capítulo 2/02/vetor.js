var idades = [21, 32, 19, 45, 27];

var idade_i2 = idades[2];

console.log("Item no índice 2: " + idade_i2);

var num_items = idades.length;

var soma = 0;

for (var i = 0; i < num_items; i++) {
    var idade = idades[i];
    soma += idade;
}

var media = soma / num_items;

idades.reverse();

// ERRO FORÇADO
var idade_inexistente = idades[100];

// 02_02

var idades = [21, 32, 19, 45, 27];

console.log("Idades: " + idades);

console.log("Terceiro item: " + idades[2]);

var total = 0;

for (var i = 0; i < idades.length; i++) {
    total += idades[i];
}

console.log("Soma: " + total);

console.log("Média: " + total / idades.length);

// ERRO FORÇADO
// console.log(idades[100]);

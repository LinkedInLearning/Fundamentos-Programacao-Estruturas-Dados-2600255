console.log("\n1) Vetor vazio");
var frutas = [];
console.log(frutas);

frutas.push("Maçã");
console.log("\n2) Push (adicionar ao final)");
console.log(frutas);

var outras_frutas = ["Banana", "Limão", "Laranja", "Uva", "Abacate"];
frutas = frutas.concat(outras_frutas);
console.log("\n3) Concatenar um vetor com outro");
console.log(frutas);

frutas.pop();
console.log("\n4) Pop (remover último elemento)");
console.log(frutas);

frutas.splice(2, 1);
console.log("\n5) Splice - remover do índice 2, 1 elemento");
console.log(frutas);

const indice = frutas.indexOf("Maçã");
if (indice != -1) {
    frutas.splice(indice, 1);
    console.log("\n6) Remover item com valor 'Maçã'");
    console.log(frutas);
} else { 
    console.log("Valor não encontrado");
}

frutas.push("Maçã")
console.log("\n7) Append (colocar no final)");
console.log(frutas);

frutas.splice(2, 0, "Pera");
console.log("\n8) Inserir no índice 2 o valor 'Pera' removendo 0 ítens");
console.log(frutas);

frutas.splice(1, 2, "Jabuticaba");
console.log("\n9) Inserir no índice 1 o valor 'Jabuticaba' removendo 2 ítens");
console.log(frutas);

frutas.reverse();
console.log("\n10) Inverter a ordem");
console.log(frutas);

frutas.sort();
console.log("\n11) Ordenar");
console.log(frutas);
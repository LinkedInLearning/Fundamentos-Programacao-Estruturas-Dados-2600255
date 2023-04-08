// Criando um conjutno vazio
var conjunto = new Set(["Banana", "Maçã", "Laranja"]);

// Adicionando elementos ao conjunto
conjunto.add("Jabuticaba");

// Itens duplicados não são inlcuidos
conjunto.add("Jabuticaba");

// Remover item
conjunto.delete("Jabuticaba");

// Acessando elementos do conjunto
var tem_laranja = conjunto.has("Laranja")

console.log(tem_laranja);
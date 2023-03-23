// Criando um dicionário vazio
let dicionario = {};

// Adicionando elementos ao dicionário
dicionario["nome"] = "Lucas";
dicionario["idade"] = 48;
dicionario["hobbies"] = ["paraglider", "mountain bike", "programação"];
dicionario["valor booleano"] = true;

// Acessando elementos do dicionário
console.log(dicionario["nome"]); // imprime "Lucas"
console.log(dicionario["idade"]); // imprime 48
console.log(dicionario["hobbies"][2]); // imprime "programação"
console.log(dicionario["valor booleano"] ? "verdadeiro" : "falso");

// Alterando elementos do dicionário
dicionario["idade"] = 100;

// Removendo elementos do dicionário
delete dicionario["valor booleano"];

// Verificando se uma chave está no dicionário
if ("hobbies" in dicionario) {
    console.log("A chave \"hobbies\" está no dicionário");
}

// Percorrendo o dicionário
for (let chave in dicionario) {
    console.log(chave, dicionario[chave]);
}
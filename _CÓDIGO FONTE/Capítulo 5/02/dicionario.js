// Criando um dicionário vazio
var dicionario = [];

// Adicionando elementos ao dicionário
dicionario["nome"] = "Lucas";
dicionario["idade"] = 48;
dicionario["hobbies"] = ["paraglider", "mountain bike", "programação"];
dicionario["valor booleano"] = true;

// Acessando elementos do dicionário
var nome = dicionario["nome"]; 
var idade = dicionario["idade"]; 
var hobbies = dicionario["hobbies"][2]; 
var booleano = dicionario["valor booleano"] ? "verdadeiro" : "falso";

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
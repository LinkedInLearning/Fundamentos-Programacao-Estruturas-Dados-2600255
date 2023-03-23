function minha_funcao_hash(login, senha) {
    let soma = 0;
    for (let caracter of login + senha) {
        soma += caracter.charCodeAt(0);
    }
    return soma;
}
    
console.log(minha_funcao_hash("lucas", "longo"));
console.log(minha_funcao_hash("lucas", "nova senha"));
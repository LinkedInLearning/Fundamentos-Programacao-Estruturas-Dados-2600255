def minha_funcao_hash(login, senha):
    
    soma = 0
    for caracter in login + senha:
        soma += ord(caracter)

    return soma

print(minha_funcao_hash("lucas", "longo"))
print(minha_funcao_hash("lucas", "nova senha"))
print(minha_funcao_hash("lucas", "nova senha"))


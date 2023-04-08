# Criando um dicionário vazio
dicionario = {}

# Adicionando elementos ao dicionário
dicionario["nome"] = "Lucas"
dicionario["idade"] = 48
dicionario["hobbies"] = ["paraglider", "mountain bike", "programação"]
dicionario["valor booleano"] = True

# Acessando elementos do dicionário
nome = dicionario["nome"]
idade = dicionario["idade"]
hobbies = dicionario["hobbies"][2]
booleano = "verdadeiro" if dicionario["valor booleano"] else "falso"

# Alterando elementos do dicionário
dicionario["idade"] = 100

# Removendo elementos do dicionário
del dicionario["valor booleano"]

# Verificando se uma chave está no dicionário
if "hobbies" in dicionario:
    print("A chave \"hobbies\" está no dicionário")

# Percorrendo o dicionário
for chave, valor in dicionario.items():
    print(chave, valor)

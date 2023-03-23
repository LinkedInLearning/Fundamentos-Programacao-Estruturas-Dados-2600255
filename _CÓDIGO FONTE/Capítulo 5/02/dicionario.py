# Criando um dicionário vazio
dicionario = {}

# Adicionando elementos ao dicionário
dicionario["nome"] = "Lucas"
dicionario["idade"] = 48
dicionario["hobbies"] = ["paraglider", "mountain bike", "programação"]
dicionario["valor booleano"] = True

# Acessando elementos do dicionário
print(dicionario["nome"])   # imprime "Lucas"
print(dicionario["idade"])   # imprime 48
print(dicionario["hobbies"][2])   # imprime "programação"
print("verdadeiro" if dicionario["valor booleano"] else "falso")

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

# Criando um conjutno vazio
conjunto = {"Banana", "Maçã", "Laranja"}

# Adicionando elementos ao conjunto
conjunto.add("Jabuticaba")

# Itens duplicados não são inlcuidos
conjunto.add("Jabuticaba")

# Remover item
conjunto.remove("Jabuticaba")

# Acessando elementos do conjunto
tem_laranja = conjunto.__contains__("Laranja")

print(tem_laranja)



# Vetor vazio
frutas = []

# Append (adicionar ao final)
frutas.append("Maçã")

# Criar outro vetor
outras_frutas = ["Banana", "Limão", "Laranja", "Uva", "Abacate"]

# Concatenar um vetor com outro
frutas += outras_frutas

# Pop (remover último elemento)
frutas.pop()

# Pop - remover do índice 2, 1 elemento
frutas.pop(2)

# Remove - buscar e remover item "Uva"
frutas.remove("Uva")

# Adicionar item "Maracujá"
frutas.append("Maracujá")

# Inserir no índice 2 o valor 'Pera' removendo 0 ítens
frutas.insert(2, "Pera")

# Inserir no índice 1 o valor 'Jabuticaba' substituindo 2 ítens 
frutas[1:3] = ["Jabuticaba"]

# Reverse - inverter a ordem
frutas.reverse()

# Sort - ordenar
frutas.sort()

print(frutas)
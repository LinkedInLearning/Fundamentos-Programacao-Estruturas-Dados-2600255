# Vetor vazio
frutas = []

# Append (adicionar)
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

# Inserir no índice 2 o valor 'Pera' removendo 0 ítens
frutas.insert(2, "Pera")

# Reverse - inverter a ordem
frutas.reverse()

# Sort - ordenar
frutas.sort()

print(frutas)
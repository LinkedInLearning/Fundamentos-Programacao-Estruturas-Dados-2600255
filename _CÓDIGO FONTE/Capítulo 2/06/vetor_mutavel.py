print("\n1) Vetor vazio")
frutas = []
print(frutas)

frutas.append("Maçã")
print("\n2) Append (adicionar ao final)")
print(frutas)

outras_frutas = ["Banana", "Limão", "Laranja", "Uva", "Abacate"]
frutas += outras_frutas
print("\n3) Concatenar um vetor com outro");
print(frutas)

frutas.pop()
print("\n4) Pop (remover último elemento)")
print(frutas)

frutas.pop(2)
print("\n5) Pop índice 2 (remover item do índice 2)")
print(frutas)

frutas.remove("Maçã")
print("\n6) Remover item com valor 'Maçã'")
print(frutas)

frutas.append("Maça")
print("\n7) Append (colocar no final)")
print(frutas)

# frutas[2:2] = ["Pera"]
# print("\n8a) Inserir no índice 2 o valor 'Pera' substituindo 0 ítens")
# print(frutas)

frutas.insert(2, "Pera")
print("\n8a) Inserir no índice 2 o valor 'Pera' substituindo 0 ítens")
print(frutas)

# frutas[1:3] = ["Jabuticaba"]
# print("\n9a) Inserir no índice 1 o valor 'Jabuticaba' substituindo 2 ítens")
# print(frutas)

frutas.pop(1)
frutas.insert(1, "Jabuticaba")
frutas.pop(2)
print("\n9b) Inserir no índice 1 o valor 'Jabuticaba' substituindo 2 ítens")
print(frutas)

frutas.reverse()
print("\n10) Inverter a ordem")
print(frutas)

frutas.sort()
print("\n11) Ordenar")
print(frutas)


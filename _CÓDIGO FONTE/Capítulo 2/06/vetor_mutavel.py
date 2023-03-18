print("\n1) Vetor vazio")
frutas = []
print(frutas)

print("\n2) Append (adicionar ao final)")
frutas.append("Maçã")
print(frutas)

print("\n3) Somar um vetor com outro")
outras_frutas = ["Banana", "Limão", "Laranja", "Uva", "Abacate", 2]
frutas += outras_frutas
print(frutas)

print("\n4) Pop (remover último elemento)")
frutas.pop()
print(frutas)

print("\n5) Pop índice 2 (remover item do índice 2)")
frutas.pop(2)
print(frutas)

print("\n6) Remove (remover)")
frutas.remove("Maçã")
print(frutas)

print("\n7) Append (colocar no final)")
frutas.append("Maça")
print(frutas)

print("\n8) Inserir no índice 1")
frutas.insert(1, "Pera")
print(frutas)

print("\n9) Inverter a ordem")
frutas.reverse()
print(frutas)

print("\n10) Ordenar")
frutas.sort()
print(frutas)
pessoa_em_fileiras = [
    ["João", "Maria", "Luiz"],
    ["Amanda", "José", "Paulo"]
]

fileira_0 = pessoa_em_fileiras[0]

pessoa_2 = fileira_0[2]

print("1) Pessoa no assento 2 da fileira 0: " + pessoa_2)

pessoa_1_fileira_1 = pessoa_em_fileiras[1][1]

print("2) Pessoa na assento 1 da fileira 1: " + pessoa_1_fileira_1)

pessoa_em_fileiras[1][1] = "Adriana"

print("3) Nova pessoa na assento 1 da fileira 1: " + pessoa_em_fileiras[1][1])


def existe_fruta(nomeFruta):
    existe = nomeFruta in frutas
    mensagem = nomeFruta
    if existe:
        mensagem += " existe no vetor"
    else: 
        mensagem += " não existe no vetor"
    print(mensagem)
    
frutas = []
print(frutas)

frutas.append("Maçã")
print(frutas)

outras_frutas = ["Banana", "Limão"]
frutas += outras_frutas
print(frutas)

existe_fruta("Limão")
existe_fruta("xxx")

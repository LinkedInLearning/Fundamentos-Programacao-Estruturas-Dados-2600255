class Nó:
    def __init__(self, dado):
        self.dado = dado
        self.proximo = None

class ListaEncadeada:
    def __init__(self):
        self.cabeca = None

    def adicionar(self, dado):
        novo_no = Nó(dado)

        if not self.cabeca:
            self.cabeca = novo_no
            return

        atual = self.cabeca
        while atual.proximo:
            atual = atual.proximo

        atual.proximo = novo_no

    def inserir_no_inicio(self, dado):
        novo_no = Nó(dado)
        novo_no.proximo = self.cabeca
        self.cabeca = novo_no

    def inserir_na_posicao(self, posicao, dado):
        novo_no = Nó(dado)
        atual = self.cabeca
        anterior = None
        indice = 0

        if posicao == 0:
            self.inserir_no_inicio(dado)
            return

        while atual and indice < posicao:
            anterior = atual
            atual = atual.proximo
            indice += 1

        novo_no.proximo = atual
        anterior.proximo = novo_no

    def remover(self, dado):
        if not self.cabeca:
            return

        if self.cabeca.dado == dado:
            self.cabeca = self.cabeca.proximo
            return

        atual = self.cabeca
        anterior = None

        while atual and atual.dado != dado:
            anterior = atual
            atual = atual.proximo

        if not atual:
            return

        anterior.proximo = atual.proximo

# Criação da lista encadeada e testes dos métodos
lista = ListaEncadeada()
lista.adicionar(1)
lista.adicionar(10)
lista.adicionar(3) 
lista.inserir_no_inicio(2)
lista.remover(10) 

print(lista)
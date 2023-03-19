# Definição da classe Node que representa cada nó da lista encadeada
class Node:
    
    # Construtor que recebe um valor e define o próximo nó como None
    def __init__(self, valor):
        self.valor = valor
        self.proximo = None


# Definição da classe ListaEncadeada 
class ListaEncadeada:

    # Construtor que define o nó inicial como None
    def __init__(self):
        self.inicio = None

    # Método que adiciona um valor no início da lista
    def adicionar_no_inicio(self, valor):
        novo_no = Node(valor)
        novo_no.proximo = self.inicio
        self.inicio = novo_no

    # Método que adiciona um valor no final da lista
    def adicionar_no_final(self, valor):
        novo_node = Node(valor)
        if self.inicio is None:
            self.inicio = novo_node
            return
        ultimo_no = self.inicio
        while ultimo_no.proximo is not None:
            ultimo_no = ultimo_no.proximo
        ultimo_no.proximo = novo_node

    # Método que imprime todos os valores da lista
    def imprimir(self):
        no_atual = self.inicio
        while no_atual is not None:
            print(no_atual.valor)
            no_atual = no_atual.proximo


# Criação da lista encadeada e testes dos métodos
lista = ListaEncadeada()
lista.adicionar_no_final(1)
lista.adicionar_no_final(2)
lista.adicionar_no_final(3)
lista.adicionar_no_inicio(0)
lista.imprimir()

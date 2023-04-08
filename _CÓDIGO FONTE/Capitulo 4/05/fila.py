class Fila:
    def __init__(self):
        self.itens = []

    def esta_vazia(self):
        return len(self.itens) == 0

    def enfileirar(self, item):
        self.itens.append(item)

    def desenfileirar(self):
        if not self.esta_vazia():
            return self.itens.pop(0)

    def peek(self):
        if not self.esta_vazia():
            return self.itens[0]

    def tamanho(self):
        return len(self.itens)

fila = Fila()

fila.enfileirar(1)
fila.enfileirar(2)
fila.enfileirar(3)

ver_primeiro_item = fila.peek()
pegar_primeiro_item = fila.desenfileirar()

print(f"fila tem {fila.tamanho()} items")
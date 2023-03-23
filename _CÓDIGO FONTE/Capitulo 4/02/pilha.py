class Stack:
    def __init__(self):
        self.itens = []

    def esta_vazio(self):
        return len(self.itens) == 0

    def push(self, item):
        self.itens.append(item)

    def pop(self):
        if not self.esta_vazio():
            return self.itens.pop()

    def peek(self):
        if not self.esta_vazio():
            return self.itens[-1]

    def tamanho(self):
        return len(self.itens)

stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)
ver_ultimo_item = stack.peek()
pegar_ultimo_item = stack.pop()

print(f"stack tem {stack.tamanho()} items")
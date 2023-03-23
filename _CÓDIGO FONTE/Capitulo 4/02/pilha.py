class Stack:
    def __init__(self):
        self.items = []

    def esta_vazio(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.esta_vazio():
            return self.items.pop()

    def peek(self):
        if not self.esta_vazio():
            return self.items[-1]

    def tamanho(self):
        return len(self.items)

stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)
ver_ultimo_item = stack.peek()
pegar_ultimo_item = stack.pop()

print(f"stack tem {stack.tamanho()} items")
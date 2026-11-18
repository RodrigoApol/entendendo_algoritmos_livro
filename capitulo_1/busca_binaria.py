def busca_binaria(lista, item):
    ## O cáluco é usando o índice da lista não o tamanho real
    baixo = 0 # posição do menor elemento
    alto = len(lista) - 1 # posição do maior elemento

    while baixo <= alto:
        meio = (baixo + alto) // 2 ## Arredenonda para o menor valor
        chute = lista[meio]
        if chute == item:
            return meio
        elif chute < item:
            baixo = meio + 1
        else:
            alto = meio - 1

print(busca_binaria([1, 2, 3, 5, 7], 7)) # Valor enocntrado em 3 tentativas
print(busca_binaria([1, 2, 3, 5, 7], 2)) # Valor encontrado em 2 tentativas
print(busca_binaria([1, 2, 3, 5, 7], 9)) # Valor não encontrado = None
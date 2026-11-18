function buscaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2) // Arredondando para baixo
        let chute = lista[meio];

        if (chute === item) {
            return meio;
        } else if (chute < item) {
            baixo = meio + 1
        } else {
            alto = meio - 1
        }
    }

    return null
}

console.log(buscaBinaria([1, 3, 5, 7, 9], 7))
console.log(buscaBinaria([1, 3, 5, 7, 9], 5))
console.log(buscaBinaria([1, 3, 5, 7, 9], 1))
console.log(buscaBinaria([1, 3, 5, 7, 9], 2))
console.log(buscaBinaria([2, 6, 9, 11], 11))
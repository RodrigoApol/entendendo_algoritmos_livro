package main

import "fmt"

func main() {

	lista := []int{1, 3, 5, 7}

	fmt.Println(busca_binaria(1, lista))
	fmt.Println(busca_binaria(3, lista))
	fmt.Println(busca_binaria(5, lista))
	fmt.Println(busca_binaria(7, lista))
	fmt.Println(busca_binaria(0, lista))
}

func busca_binaria(item int, lista []int) int {
	baixo := 0
	alto := len(lista) - 1

	for baixo <= alto {
		meio := (baixo + alto) / 2 // Menospreza casas decimais
		chute := lista[meio]

		if chute == item {
			return meio
		} else if chute < item {
			baixo = meio + 1
		} else {
			alto = meio - 1
		}
	}

	return 0
}

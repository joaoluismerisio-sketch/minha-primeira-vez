#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int numero;

   
    srand(time(NULL));

    numero = rand() % 10 + 11;

    printf("Número aleatório gerado: %d\n", numero);

    return 0;
}
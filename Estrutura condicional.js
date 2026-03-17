//Exercício 2: Estrutura Condicional
//Desenvolva um programa que verifica se um número é par ou ímpar.

se (numero % 2 == 0) 
então
  escreva ("Número par")
senão
  escreva ("Número ímpar")
fim-se

//Exemplo do Professor
numero = int(input("Digite um número: "))
if numero % 2 == 0:
    print("O número é par")
else:
    print("O número é ímpar")

//JAVASCRIPT
let numero = 10;

if (numero % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}
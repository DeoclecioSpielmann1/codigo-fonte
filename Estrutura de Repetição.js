//Exercício 3: Estrutura de Repetição
//Crie um programa que exiba a tabuada de um número informado pelo usuário.
inicio
   num ← informado pelo usuário
   contador ← 1

   enquanto (contador <= 10) faça;
      escreva(num, "x", contador, "=", num * contador)
      contador ← contador + 1
   fimenquanto
fim

//Correção

inicio
   contador ← 1
   enquanto (contador <= 10) faça;
      escreva(contador)
      contador ← contador + 1
   fimenquanto
fim

//Exemplo do Professor
num = int(input("Digite um número: "))
for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")
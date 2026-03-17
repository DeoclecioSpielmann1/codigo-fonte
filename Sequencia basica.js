//Exercício 1: Sequência Básica

//Escreva um programa que solicite dois números ao usuário
//e exiba a soma entre eles.

inicio 
  num1 ← leia "Digite o primeiro numero:"
  num2 ← leia "Digite o segundo numero:"
  soma ← num1 + num2
  escreva "A soma é:", soma
fim

//correção
inicio
   escreva("Digite o primeiro numero: ")
   leia(num1)

   escreva("Digite o segundo numero: ")
   leia(num2)

   soma ← num1 + num2

   escreva("A soma é: ", soma)
fim

//Exemplo do professor
num1 = input("Digite o primeiro número: ")
num2 = input("Digite o segundo número: ")
soma = num1 + num2
print("A soma é:", soma)

//JAVASCRIPT
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro numero: ", (num1) => {
  rl.question("Digite o segundo numero: ", (num2) => {
    
    num1 = Number(num1);
    num2 = Number(num2);

    const soma = num1 + num2;

    console.log("A soma é:", soma);

    rl.close();
  });
});

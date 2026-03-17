//Exercício 1: Cálculo de Média

//Escreva um algoritmo que leia duas notas de um aluno, 
//calcule a média e exiba se o aluno foi aprovado (média >= 7) ou reprovado.

início 
  A ← 8
  B ← 6
  média ← (A + B ) / 2
  se (média >= 7) então
    escreva "Aprovado"
  senão
    escreva "Reprovado"
  fim-se
fim

//JAVASCRIPT

let A = 8;
let B = 6;

let media = (A + B) / 2;

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
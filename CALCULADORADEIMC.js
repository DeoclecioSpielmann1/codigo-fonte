//Calculadora de IMC
//Desenvolva um script que calcula o Índice de Massa Corporal.
//Com base no IMC, mostre a categoria de peso.
let peso = 70; 
let altura = 1.75;
{
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        console.log("Você está abaixo do peso.");
    } else if (imc < 25) {
        console.log("Você está com o peso ideal.");
    } else {
        console.log("Você está acima do peso.");
    }
}
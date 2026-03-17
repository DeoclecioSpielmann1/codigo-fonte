//DESAFIO!
//João necessita de um sistema para sua loja, 
//na tela do sistema ele deseja que seja apresentada a previsão do tempo, 
//algo bem simples que armazene apenas a temperatura. 
//como o sistema pode armazenar essa informação de forma dinâmica sem utilizar banco de dados?

inicio

temperatura = 0

escreva("Digite a temperatura atual:")
leia(temperatura)

escreva("Previsao do tempo:")
escreva("Temperatura atual: ", temperatura, " graus")

fim

//JAVASCRIPT
let previsaoTempo = {
  temperatura: null
};

// atualiza a temperatura
function atualizarTemperatura(valor) {
  previsaoTempo.temperatura = valor;
}

// mostra na tela
function mostrarTemperatura() {
  console.log("Temperatura atual:", previsaoTempo.temperatura, "°C");
}

atualizarTemperatura(25);
mostrarTemperatura();

//Explicação:
//Neste código, criamos um objeto chamado `previsaoTempo` que tem uma propriedade `temperatura` para armazenar a temperatura atual. 
//A função `atualizarTemperatura` é usada para atualizar o valor da temperatura, e a função `mostrarTemperatura` exibe a temperatura atual no console. 
//Dessa forma, podemos armazenar e exibir a temperatura de forma dinâmica sem a necessidade de um banco de dados.
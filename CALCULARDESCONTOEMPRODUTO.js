//Calcular desconto em produto
//Vamos calcular o valor final com desconto:
const valorProduto = 148.99;
const percentualDesconto = 15;
const valorDesconto = (valorProduto * percentualDesconto) / 100;
const valorFinal = valorProduto - valorDesconto;
console.log("O valor final com desconto é: " + valorFinal);
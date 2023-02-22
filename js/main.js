// Defina valores para as variáveis: nome do produto, preço do produto, desconto do produto e desconto válido (booleano);

// Caso desconto válido seja verdadeiro. Realize o cálculo do desconto e salve em uma nova variável: preço final. 
// Caso contrário, apenas repasse o valor do produto para variável de preço final;

// Faça a seguinte verificação: Se o preço final do produto for maior que 1000, reduza 50 reais. 
//Caso contrário, apenas mostre uma mensagem na tela com o valor do preço final;

// Crie um array de demandas com os valores: 10, 2, 1, 30, 5. Cada item no array representa a demanda de um cliente diferente. 
// Por exemplo o primeiro cliente está solicitando 10 produtos.
// Para cada demanda no array calcule quanto cada cliente deverá pagar e mostre a mensagem no formato: "O cliente 1 deverá pagar: R$ 585". 
// Salve o total de cada cliente em um novo array que deverá começar vazio.
// Mostre o total obtido de todos os clientes no console. No formato: "O total de lucro é de R$ 5000", por exemplo

let nomeProduto = "celular";
let precoProduto = 1200;
let descontoProduto = 100;
let descontoValido = true;
let precoFinal = precoProduto;
let demanda = [10, 2, 1, 30, 5];
let totalCliente = [];
let lucroTotal = 0;

if(descontoValido === true){ 
    precoFinal = precoProduto - descontoProduto;
    console.log(`Seu desconto é válido! Valor total à pagar: ${precoFinal}`);
}else{
    console.log(`Valor total à pagar: ${precoFinal}`);
}

console.log("------------------------------------------------------------------------------------------------")

if(precoFinal > 1000){
    precoFinal = precoFinal - 50;
    console.log(`Oba! Você recebeu um desconto extra! Valor total à pagar: ${precoFinal}`);
}else{
    console.log(`Valor total à pagar: ${precoFinal}`);
}

console.log("------------------------------------------------------------------------------------------------")

for (let i = 0; i < demanda.length; i++) {
    let e = demanda[i] * precoFinal;
    totalCliente.push(e);
    console.log(`O cliente ${i + 1} deverá pagar: ${totalCliente[i]}`);
}
for (let i = 0; i < totalCliente.length; i++){
    lucroTotal += totalCliente[i];
}
    console.log(`O lucro total é de: R$ ${lucroTotal}`);



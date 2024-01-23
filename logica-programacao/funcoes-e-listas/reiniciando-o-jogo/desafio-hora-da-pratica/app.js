// Crie uma função que calcule o índice de massa corporal (IMC) 
// de uma pessoa, a partir de sua altura, em metros, e peso, em 
// quilogramas, que serão recebidos como parâmetro.
function calcularImc (altura, peso){
    let imc = peso / (altura * altura);
}


// Crie uma função que calcule o valor do fatorial de um número 
// passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}


// Crie uma função que converte um valor em dólar, passado como 
// parâmetro, e retorna o valor equivalente em reais. Para isso, 
// considere a cotação do dólar igual a R$4,80.
function converterDolaresParaReais(valorEmDolares) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolares * cotacaoDolar;
    return valorEmReais.toFixed(2);
}


// Crie uma função que mostre na tela a área e o perímetro de uma 
// sala retangular, utilizando altura e largura que serão dadas 
// como parâmetro.
function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área: ${area}m². Perímetro: ${perimetro}m`);
}

// Crie uma função que mostre na tela a área e o perímetro de uma 
// sala circular, utilizando seu raio que será fornecido como parâmetro. 
// Considere Pi = 3,14.
function mostrarAreaEPerimetroCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
  
    console.log(`Área: ${area.toFixed(2)}m². Perímetro: ${perimetro.toFixed(2)}m`);
}

// Crie uma função que mostre na tela a tabuada de um número dado como 
// parâmetro.
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i; 
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

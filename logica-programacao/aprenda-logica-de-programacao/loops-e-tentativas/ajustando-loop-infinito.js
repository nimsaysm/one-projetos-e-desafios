
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = 0;

while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador++;
}

let media = soma / qtdNumeros;

console.log(media);

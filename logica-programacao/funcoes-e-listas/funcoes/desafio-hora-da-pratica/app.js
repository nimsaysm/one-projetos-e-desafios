// Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Olá, mundo!');
}

// Criar uma função que recebe um nome como parâmetro e exibe 
// "Olá, [nome]!" no console.
function olaPessoa(nome) {
    console.log(`Olá, ${nome}`);
}

// Criar uma função que recebe um número como parâmetro e retorna 
// o dobro desse número.
function dobroDoNumero(num) {
    dobro = 2 * num;
    return dobro;
}

// Criar uma função que recebe três números como parâmetros e retorna 
// a média deles.
function mediaDosNumeros(num1, num2, num3) {
    media = (num1, num2, num3)/3;
}

// Criar uma função que recebe dois números como parâmetros e retorna 
// o maior deles.
function maiorNum(num1, num2) {
    if(num1 > num2) {
        return num1;
    } 
    if (num2 > num1) {
        return num2;
    }
    else {
        return "Os números são iguais";
    }
}

// Criar uma função que recebe um número como parâmetro e retorna o 
// resultado da multiplicação desse número por ele mesmo
function numeroVezesEleMesmo(num){
    return num*num;
}
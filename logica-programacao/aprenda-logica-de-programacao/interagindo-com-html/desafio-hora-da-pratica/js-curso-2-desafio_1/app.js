// Altere o conteúdo da tag h1 com document.querySelector e atribua 
//o seguinte texto: Hora do Desafio.
let h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do Desafio';


// Crie uma função que exiba no console a mensagem O botão foi clicado 
//sempre que o botão Console for pressionado.
function exibirMensagemConsole(){
    console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre 
//que o botão Alerta for pressionado.
function exibirAlerta(){
    alert('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, 
//perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta 
//com a mensagem concatenando a resposta com o texto: Estive em {cidade} 
//e lembrei de você.
function exibirPrompt() {
    let cidadeBrasil = prompt('Digite uma cidade do Brasil:');
    alert(`Estive em ${cidadeBrasil} e lembrei de você!`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma 
//em um alerta.

function soma(){
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    alert(`Resultado da soma: ${soma}`);
}
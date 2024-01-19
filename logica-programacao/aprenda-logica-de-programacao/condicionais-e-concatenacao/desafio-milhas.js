// // Você é uma pessoa recém-chegada à equipe de desenvolvimento 
// do Jornada Milhas, um site de compra de pacotes de viagens para 
// os principais destinos do mundo.

// Como primeira tarefa, sua liderança pediu para que você corrigisse 
// um bug que tem acontecido quando uma pessoa cliente do site tenta 
// utilizar suas milhas do cartão de crédito para obter desconto nos 
// pacotes de viagem.

// Para te ajudar a compreender a origem do bug, sua liderança explicou 
// a regra de negócio utilizada para compras de pacotes de viagens com milhas:

// Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto.
// Pessoas com uma quantidade de milhas superior a 30.000 recebem 20% 
// de desconto.
// Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 
// 30.000, recebem 10% de desconto.

// Mas, segundo relatos de clientes, ao tentar utilizar o desconto 
// referente a 5.000 milhas, não ocorre nenhum desconto. Já clientes com 
// mais de 30.000 milhas estão recebendo desconto excedente ao que deveriam
// receber.



let porcentagemDesconto = 0;

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

}

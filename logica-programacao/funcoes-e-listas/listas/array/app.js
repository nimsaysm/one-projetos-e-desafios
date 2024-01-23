// Criando uma array
// Você pode criar uma array em JavaScript declarando uma variável e atribuindo-lhe valores entre colchetes [].

let frutas = ["Maçã", "Uva", "Laranja"];


// Acessando os valores
// Os elementos de uma array são acessados usando índices numéricos, que começam em 0.

console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[2]); // Saída: "Laranja"


// Adicionando novos elementos
// Para adicionar um elemento ao final da array, você pode usar o método push.

frutas.push("Morango");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]


// Removendo o último elemento
// Para remover o último elemento, você pode usar o método pop.

frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

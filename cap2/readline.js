const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o seu nome: ', (nome) => {
    console.log(`Olá, ${nome}!`);
    rl.close();
});   

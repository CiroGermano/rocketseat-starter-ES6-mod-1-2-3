//
// Desafio Q4
//
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

// Q4.1
let { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// Q4.2
const usuario = { nome: 'Diego', idade: 23 };

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo(usuario)); 

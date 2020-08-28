// Q3.1
const arr = [1, 2, 3, 4, 5];
arr.map( item => item + 10);

// Q3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;

// Q3.3
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ( { nome, idade } );
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// Q3.4
const promise = () => new Promise( (resolve, reject) => resolve() );

import { soma } from './funcoes';
console.log(soma(1, 2));
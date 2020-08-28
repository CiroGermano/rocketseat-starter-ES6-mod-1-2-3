const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

// Q2.1
let mapedArr = usuarios.map( (usuario) => usuario.idade);
console.log(mapedArr);

// Q2.2
let filteredArr = usuarios.filter( usuario => (usuario.empresa == 'Rocketseat') && (usuario.idade > 18) );
console.log(filteredArr);

// Q2.3
let findedArr = usuarios.find( usuario => usuario.empresa == 'Google' );
console.log(findedArr);

// Q2.4
let mapAndFilter = usuarios
                    .map( usuario => ({ ...usuario, idade: usuario.idade * 2 }) )
                    .filter(usuario => (usuario.idade < 51));
console.log(mapAndFilter); 

var nomes = ['Débora', 'Jani', 'Silvia', 'Carla', 'Fernanda', 'Mariel'];

function ordemAlfabetica(){
    console.log(nomes.sort());
}

function ordemReversa(){
    console.log(nomes.reverse());
}

function ordemAlfabeticaReversa(){
    console.log(nomes.sort().reverse());
}

console.log('Na ordem que coloquei no array');
console.log(nomes);
console.log("---------------------------")
console.log('Em ordem alfabetica');
ordemAlfabetica();
console.log("---------------------------")
console.log('Ordem afabetica reversa');
ordemAlfabeticaReversa();
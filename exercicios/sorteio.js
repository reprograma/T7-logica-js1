function sorteio(e){
    return Math.floor(Math.random() * e);
}

for(var i = 0; i < 10; i++){
    console.log(sorteio(30));
}
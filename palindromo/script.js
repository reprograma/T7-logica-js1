function palindromo() {
    var inputValor = document.getElementById("input").value;
    var inputMinusculas = inputValor.toLowerCase();
    var inputSemEspacos = inputMinusculas.split(' ').join('');

    var resposta = document.getElementById("resposta");

    for (var i = 0; i < inputSemEspacos.length/2; i++) {
        if (inputSemEspacos[i] !== inputSemEspacos[inputSemEspacos.length - 1 - i]) { 
            return resposta.innerText = "Não é!"
        }
    }
    resposta.innerText = "Simmmm! 😆"
}
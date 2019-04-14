function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var resultado = peso / (altura * altura);
    var gif;
    var text;
    var cssclass;

    if(resultado < 18){
        text = "Uma deusa! 🎵";
        gif = `<img src="https://media.giphy.com/media/Lh1e8QfHRY5tm/giphy.gif" alt="">`;
        cssclass = "linha1";
    }
    else if(resultado >= 18 && resultado < 25){
        text = "Uma louca! 🎵";
        gif = `<img src="https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif" alt="">`;
        cssclass = "linha2";
    }
    else if(resultado >= 25 && resultado < 30){
        text = "Uma feiticeira! 🎵";
        gif = `<img src="https://media.giphy.com/media/APPbIpIe0xrVe/giphy.gif" alt="">`;
        cssclass = "linha3";
    }
    else if(resultado >=30 && resultado < 40){
        text = "Ela é demais! 🎵";
        gif = `<img src="https://media.giphy.com/media/mL7L2ww940xm8/giphy.gif" alt="">`;
        cssclass = "linha4";
    }
    else{
        text = "Meu Deus, ela é demais! 🎵"
        gif = `<img src="https://media.giphy.com/media/QANpTP1YKROQE/giphy.gif" alt="">`;
        cssclass = "linha5";
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;

}



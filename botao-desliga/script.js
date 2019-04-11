function desliga(){

    var meuBody = document.getElementById("fundo");

    if(meuBody.style.background == "white"){
        meuBody.style.background = "black";
    }else{
        meuBody.style.background = "white";
    }
}
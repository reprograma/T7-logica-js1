// Crie uma função com dois argumentos, que retorna a subtração deles.
?

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "5" ao resultado retornado da função.
?

// Qual o valor atualizado dessa variável?
?

// Declare uma nova variável, sem valor.
?

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/
function nome (x){
    var string = "O novo valor da minha variável agora é "
    return string + x
}

// Invoque a função criada acima.
?

// Qual o retorno da função?
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/
function minhaFuncao(argumento1, argumento2, argumento3){
    if(!argumento1 || !argumento2 || !argumento3){
        return "Preencha todos os valores corretamente"
    }else{
        var multiplicacao = argumento1 + argumento2 + argumento3;
        var resultadoFinal = multiplicacao + 2
        return resultadoFinal
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/
function minhaFuncao(a,b,c){
    if(!b && !c){
        return a
    }
    else if(!c){
        return a + b
    }
    else if(a && b && c){
        var soma = a + b;
        return soma / c;
    }
    else if(!a && !b && !c){
        return false;
    }
    else{
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
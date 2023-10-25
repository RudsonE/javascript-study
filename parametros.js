//Os parâmetros são passados nos () da função

            // parâmetros
function soma(num1, num2){
    return num1 + num2
}

console.log(soma(10, 15))

//os parâmetros são separados por virgulas

// parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade(24, "Rudson")) //isso fez inverter os dados, assim exibindo eles erroneamente

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5))) 
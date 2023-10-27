const numeros = [100, 200, 300, 400, 500, 600];

//enquanto i < 6 adicione 1 a i e imprima o i e o numero do indice i
for(let i = 0; i < 6; i++){
    console.log(`${i} : ${numeros[i]}`);
}
console.log("-------------------------")
//forma mais pratica
//para cada item (i) dentro do array (numeros)
for(i in numeros){
    console.log(`${i} : ${numeros[i]}`);
}
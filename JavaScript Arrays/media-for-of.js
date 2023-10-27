const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for(let elemento of notas){
    soma += elemento
}

const media = soma / notas.length

console.log(`A média das notas é ${media}`)
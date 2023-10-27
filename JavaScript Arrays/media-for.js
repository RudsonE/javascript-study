const notas = [10, 6.5, 8, 7.5];

let soma = 0


for(i in notas){
    soma += notas[i];
}

const media = soma / notas.length;

console.log(`A media das notas é ${media}`);
const notas = [10, 6.5, 8, 7.5];

let soma = 0;

notas.forEach((elemento) => {
    soma += elemento
});

const media = soma / notas.length;
console.log(`A média das notas é ${media}`);
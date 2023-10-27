const notas = [10, 9.5, 8, 7, 6];

const novasNotas = notas.map((nota) => {
    
    return nota >= 10 ? 10 : Math.floor(nota + 1);
});

console.log(novasNotas);

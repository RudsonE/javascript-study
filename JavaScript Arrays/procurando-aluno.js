const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista2d = [alunos, medias];


function procuraAluno(aluno){
    if(lista2d[0].includes(aluno)){
        
        const [alunos, medias] = lista2d;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
    

        return `${aluno} tem a média ${mediaAluno}`

    } else {

        return "Aluno não encontrado"

    }
}

console.log(procuraAluno("Caio"))
import fs from 'fs';
import chalk from 'chalk';


function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}


function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, enconding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}

pegaArquivo('./arquivos/texto.md')
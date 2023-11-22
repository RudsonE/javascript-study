import fs from 'fs';
import chalk from 'chalk';


function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}


//usando async/await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        console.log(chalk.green(texto))
    } catch (erro) {
        trataErro(erro)
    }
}


pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')

const regexe = "\[[^[\]]*?\]"
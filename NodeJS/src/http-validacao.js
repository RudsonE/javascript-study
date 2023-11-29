import chalk from "chalk";

function extraiLinks (arrLinks){
   return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        listaURLs.map(async (url) => {
            try{
                const response = await fetch(url)
                return response.status
            } catch(erro) {
                return manejaErro(erro)
            }
        })
    )
    return arrStatus;
}

function manejaErro(erro){
    if (erro.cause.code === "ENOTFOUND"){
        return "Link não encontrado"
    } else {
        return "Ocorreu algum erro"
    }
    //console.log(chalk.red("Algo deu errado"), erro);
}

export default async function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))

}

// 
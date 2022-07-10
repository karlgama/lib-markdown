import chalk from 'chalk'
import fs from 'fs'

function trataErro(erro) {
    throw new Error(erro.code)
}

async function pegaArquivo(caminho) {
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminho, encoding)
        console.log(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

// function pegaArquivo(caminho) {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminho,encoding)
//     .then((texto)=>console.log(chalk.green(texto)))
//     .catch((erro)=>trataErro(erro))
// }

pegaArquivo('./arquivos/teste.md')

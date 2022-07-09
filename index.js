import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro) {
    throw new Error(erro.code);
}

function pegaArquivo(caminho) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminho,encoding)
    .then((texto)=>console.log(chalk.green(texto)))
    .catch((erro)=>trataErro(erro))
}

pegaArquivo("./arquivos/teste.md");
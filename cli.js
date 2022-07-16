#!/usr/bin/env node
// import chalk from 'chalk'
// import { pegaArquivo } from './index.js'
// import validaURLs from './http-validação.js'

const chalk = require('chalk')
const pegaArquivo = require('./index.js')
const validaURLs = require('./http-validação.js')

const caminho = process.argv

async function processaTexto(caminho) {
    const resultado = await pegaArquivo(caminho[2])
    if (caminho[3] === 'validar') {
        console.log(
            chalk.green('links validados: '),
            await validaURLs(resultado)
        )
        return
    }
    console.log(chalk.yellow('lista de links'), resultado)
}

processaTexto(caminho)

// import fs from 'fs'
const fs = require('fs')
const { Module } = require('module')

const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
function trataErro(erro) {
    console.log(erro)
    throw new Error(erro.code)
}

function extraiLinks(texto) {
    const results = []
    let temp

    while ((temp = regex.exec(texto)) !== null) {
        results.push({ [temp[1]]: temp[2] })
    }
    return results.length === 0 ? 'não há links' : results
}

async function pegaArquivo(caminho) {
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminho, encoding)
        return extraiLinks(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

module.exports = pegaArquivo;
// import fetch from 'node-fetch'
const fetch = require('node-fetch')

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise.all(
            arrayUrls.map(async (url) => {
                const res = await fetch(url)
                return res.status
            })
        )

        return arrayStatus
    } catch (erro) {
        manejaErros(erro)
    }
}

async function validaURLs(links) {
    const urls = geraArrayDeUrls(links)
    const statusLinks = await checaStatus(urls)
    const resultados = links.map((obj, i) => ({
        ...obj,
        status: statusLinks[i],
    }))
    return resultados
}

function geraArrayDeUrls(arrayLinks) {
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join())
}

export default validaURLs

const pegaArquivo = require('../index.js')

const arrayResult = [
    { FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList' },
]

describe('pegaArquivo::', () => {
    it('deve ser função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultados', async () => {
        const result = await pegaArquivo(
            '/home/karl/projetos/node/lib-markdown/test/arquivos/teste.md'
        )
        expect(result).toEqual(arrayResult)
    })

    it('deve retornar mensagem "não há links"', async () => {
        const result = await pegaArquivo('test/arquivos/texto_sem_link.md')
        expect(result).toBe('não há links')
    })
})

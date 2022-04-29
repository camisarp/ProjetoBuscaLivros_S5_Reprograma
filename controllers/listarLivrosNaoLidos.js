const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {

  const opcaoInicial = read.question('Deseja buscar por lista de Desejo? S/N ').toUpperCase()

  if (opcaoInicial === 'S') {
    console.clear()

    const livrosLidos = livros.filter(livro => livro.leu === false)
    console.table(livrosLidos)

  } else {
    console.log('Até a próxima');
  }
}

module.exports = listarLivrosNaoLidos
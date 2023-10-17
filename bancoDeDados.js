const mongoose = require('mongoose')

async function conectBancoDeDados() {
  try {
    console.log('Conexão com o banco de dados iniciou')

    await mongoose.connect('')

    console.log('Conexão com o banco de dados feita com sucesso!')
  } catch(erro) {
    console.log(erro)
  }
}

module.exports = conectBancoDeDados

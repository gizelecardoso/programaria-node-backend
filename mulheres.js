const express = require('express') //inicia express
const { v4: uuidv4 } = require('uuid') //inicia uuid
const router = express.Router() //configuração da primeira parte da rota

const app = express() //inicia app
app.use(express.json()) //prepara o dado que chegou via resquest para o formato json
const porta = 3333 //cria porta

//criação da lista inicial de mulheres
const mulheres = [
  {
    id: '1',
    nome: 'Simara Conceição',
    imagem: 'https://bit.ly/3LJIyOF',
    minibio: 'Desenvolvedora e instrutora',
  },
  {
    id: '2',
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'CEO & Founder da PrograMaria',
  },
  {
    id: '3',
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
  }
]

//GET
function mostraMulheres(request, response) {
  response.json(mulheres)
}

//POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

  mulheres.push(novaMulher)

  response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
    if (mulher.id === request.params.id) {
      return mulher
    }
  }

  const mulherEncontrada = mulheres.find(encontraMulher)

  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome
  }

  if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
  }

  if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
  }

  response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
  function todasMenosEla(mulher) {
    if(mulher.id !== request.params.id) {
      return mulher
    }
  }

  const mulheresQueFicam = mulheres.filter(todasMenosEla)

  response.json(mulheresQueFicam)
}

//PORTA
function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta)
}

//rotas
app.use(router.get('/mulheres', mostraMulheres)) // configuração da rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configuração da rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configuração da rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) // configuração da rota DELETE /mulheres/:id

app.listen(porta, mostraPorta); // servidor ouvindo a porta

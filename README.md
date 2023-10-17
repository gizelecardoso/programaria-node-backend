# programaria-node-backend

Respositório dedicado aos aprendizados do Curso da Programaria 'Back-End | Minha primeira API'
Apesar de naõ ter sido minha primeira API, foi meu primeiro contato com NodeJS utilizando JavaScript no Backend.
A experiência foi muito boa, e compartilho um pouco dos aprendizados nesse README.

Tema: A aplicação é baseada na listagem de Mulheres da Tecnologia.

Como rodar essa aplicação:
  - Precisa do Node Instalada no máquina
  - Precisa do gerenciado de pacotes para rodar os comandos necessários para instalar bibliotecas em nossa aplicação

Para começar um Projeto NodeJS
  ```
  // iniciar a construção
  npm init -y
  ```
Para instalar bibliotecas
  ```
  npm install <nome>
  ```

Para rodar o projeto
  ```
  node <nome_do_arquivo>
  //no caso
  node mulheres.js
  ```

Algumas das bibliotecas utilizadas no projeto:

1. Express:
  - Pacote que possibilita o nosso projeto ser utilizado como servidor
  - [saber mais sobre express](https://expressjs.com/pt-br/guide/routing.html)

2. UUID
  - Pacote para gerar Ids únicos
  - Utilizamos quando ainda gerávamos os objetos dentro da aplicação
  - [saber mais sobre uuid](https://www.npmjs.com/package/uuid)
    
3. Mongoose
  - Biblioteca para utilizar MongoDB no NodeJS
  - [saber mais sobre mongoose](https://mongoosejs.com/)

4. CORS
  - Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) 
  - [saber mais sobre cors](https://www.npmjs.com/package/cors)
  - [saber mais sobre cors - mozilla](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)

Conceitos Importantes:
  - Javascript Assíncrono (async / away) - permite que a aplicação continue rodando,
  - mesmo que precise de alguma resposta externa, enquanto espera essa resposta, a aplicação não precisa ficar parada
  - [VEJA MAIS SOBRE](https://developer.mozilla.org/pt-BR/docs/conflicting/Learn/JavaScript/Asynchronous/Introducing)

Fizemos o deploy da aplicação no servidor:
  1. BACKEND
    - Deploy do backend foi realizado no Render: https://render.com/
    - [PROJETO BACKEND](https://backend-node-programaria.onrender.com)
     
  3. FRONTEND
     - Existe um outro repositório https://github.com/gizelecardoso/front-programaria-react
     - foi feito fork do github da programaria
     - adicionamos a url do nosso projeto
     - Deploy desse frontend foi realizado no Vercel: https://vercel.com/
     - [FRONTEND INTEGRADO](https://front-programaria-react-murex.vercel.app/)

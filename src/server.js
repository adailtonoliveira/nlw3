//importar dependências
const express = require('express');
const path = require('path');  //pegar pasta raíz, função do node

//iniciando o express
const server = express();
server
//utilizando os arquivos estáticos
.use(express.static('public'))
//criar uma rota
.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//Ligar o servidor
server.listen(5500)
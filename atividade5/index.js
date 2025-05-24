//nao esquecer de baixar o npm install @express4.algumacoisa.seila pra baixar o express
// e tbm baixar o mustacheexpress com npm install mustache-express@1.3.2
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

//criando renderizador usando o mustacheExpress
app.engine('html', mustacheExpress());
//propriedade prevista pelo mustache, dizendo pro express que o motor renderizador é html
app.set('view engine', 'html');
//variavel __dirname retorna até caminho da pasta
app.set('views', __dirname + '/views');
//agr sim a integração com o backend
app.use(express.urlencoded({extended: true}));

const agendamentoRouter = require('./routers/agendamentoRouter')
app.use('/', agendamentoRouter)

const PORT = 8080
app.listen(PORT, ()=> {
    console.log('app rodando na porta ' + PORT);
});


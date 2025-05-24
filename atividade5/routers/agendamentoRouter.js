//lugar adequado pra colocar definição das rotas

const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

//quando ele acessar a rota /, vou criar função que vai dizer como esse porta age 
router.get('/', agendamentoController.getIndexView);

router.post('/agendar_consulta', agendamentoController.postAgendarConsulta);

module.exports = router;
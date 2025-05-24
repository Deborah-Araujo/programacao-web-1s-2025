//função que renderiza tela HTML 
function getIndexView(req, res){
    res.render('index.html');
}

function postAgendarConsulta(req, res){
    let dados_consulta = req.body;
    let { campos_invalidos, mensagens_erro_data } = validar_dados_consulta(dados_consulta);

    res.render('index.html', {
        dados_consulta,
        campos_invalidos,
        mensagens_erro_data
    });
}

function validar_dados_consulta(dados_consulta){
    let campos_invalidos = [];
    let mensagens_erro_data = [];  
    let erro = false
    let erroOpt = false
    let hoje = new Date();
    hoje.setDate(hoje.getDate() + 1);
    let data_minima_amanha = hoje.toISOString().split('T')[0];

    if(dados_consulta.nome.length == 0){
        campos_invalidos.push("Nome");
        erro = true
    }

    if(dados_consulta.sobrenome.length == 0){
        campos_invalidos.push("Sobrenome");
        erro = true
    }

    if(dados_consulta.cpf.length == 0){
        campos_invalidos.push("CPF");
        erro = true
    }

    if(dados_consulta.data_nascimento.length == 0){
        campos_invalidos.push("Data de Nascimento");
        erro = true
    }

    if(dados_consulta.telefone.length == 0){
        campos_invalidos.push("Telefone");
        erro = true
    }

    if(dados_consulta.cep.length == 0){
        campos_invalidos.push("CEP");
        erro = true
    }

    if(dados_consulta.endereco.length == 0){
        campos_invalidos.push("Endereço");
        erro = true
    }

    if(dados_consulta.clinica.length == 0 || dados_consulta.clinica === "Clique para escolher"){
        campos_invalidos.push("Clinica");
        erroOpt = true
        erro = true
    }

    if(dados_consulta.especialidade.length == 0 || dados_consulta.especialidade === "Clique para escolher"){
        campos_invalidos.push("Especialidade");
        erroOpt = true
        erro = true
    }

    if(dados_consulta.data_consulta.length == 0){
        campos_invalidos.push("Data da Consulta");
        erro = true
    } else if(dados_consulta.data_consulta < data_minima_amanha){
        mensagens_erro_data.push("Data da consulta deve ser pelo menos um dia após a data atual.");
        erro = true
    }

    if(dados_consulta.hora_consulta.length == 0){
        campos_invalidos.push("Hora da Consulta");
        erro = true
    }

    if (erro == false && erroOpt == false) {
        console.log(dados_consulta)
    }

    return {
        campos_invalidos,
        mensagens_erro_data
    };
}


module.exports = {
    getIndexView,
    postAgendarConsulta
};

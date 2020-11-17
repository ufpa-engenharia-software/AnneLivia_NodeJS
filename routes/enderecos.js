const bodyParser = require('body-parser')
module.exports = app => {
	const Enderecos = app.models.enderecos;
	
	app.get("/enderecos", (req, res) => {
			Enderecos.findAll({},(retorno)=>
							{res.json({enderecos: retorno})});
	});

// create application/json parser
  var jsonParser = bodyParser.json()
	app.post("/enderecos", jsonParser, function(req, res) {
		
 			var idPessoa = req.body.idPessoa;
      var logradouro = req.body.logradouro;
      var numero = req.body.numero;
      var complemento = req.body.complemento;
      var bairro = req.body.bairro;
      var cidade = req.body.cidade;
      var estado = req.body.estado;
      var tipoDeEndereco = req.body.tipoDeEndereco;

			res.json(
				{
					idPessoaRecebido: idPessoa,
					logradouroRecebido: logradouro,
          numeroRecebido: numero,
          complementoRecebido: complemento,
          bairroRecebido: bairro,
          cidadeRecebido: cidade,
          estadoRecebido: estado,
          tipoDeEnderecoRecebido: tipoDeEndereco,
				}
			)
	});
};
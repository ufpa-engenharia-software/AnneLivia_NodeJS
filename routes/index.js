const rp = require('request-promise')
const req = require('request')
module.exports = app => {
	app.get('/', (req, res) => {
		res.send('Bem-vindo ao E-Commerce')
	});
	app.get('/cep/:cep', (req, res) => {
		var cep = req.params.cep;	
		const getViaCep = {
            uri: 'https://viacep.com.br/ws/'+cep+'/json/',
            method: 'GET'            
        }
        
		rp(getViaCep).then(function (parsedBody) {
                res.send(parsedBody);
            }).catch(function (err) { 
                res.send("ERRO");
            });
	});
};

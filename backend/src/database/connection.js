const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

//Exportar variavel para fora do arquivo
module.exports = connection;
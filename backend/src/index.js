const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

/*Usar a variavel routes que 
carrega a rota dentro desse index*/
app.use(routes);

app.listen(3333);
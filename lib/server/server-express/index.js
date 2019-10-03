/**
 * @file server-express
 * @description Configurações do servidor
 * @author imovel.ai
 */
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')

const config = require('./config');

const app = express();
app.use(require('cors')());
app.use(require('compression')());
app.use(helmet());
app.use(bodyParser.json());
app.use('/healthcheck', require('express-healthcheck')());

const listRoutes = require('../search-routes');
// adicionando rotas
listRoutes.forEach(route => {
    if (route.name === config.ROUTER){
        app.use(route);
    }
});

module.exports = app;

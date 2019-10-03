/**
 * @file logger
 * @description Criando modulo de logger configurado
 * @author imovel.ai
 */
const winston = require('winston');
const customTransports = require('./transports');

/**
 * Obter logger
 * @param {string} name Nome do arquivo
 */
function getLogger(name) {

    logger = winston.createLogger({
        transports: [
            customTransports.customConsole(name),
            customTransports.customFile(name)
        ]
    });

    return logger;

}


module.exports = { getLogger };

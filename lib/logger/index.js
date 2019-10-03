/**
 * @file logger
 * @description Criando modulo de logger configurado
 * @author imovel.ai
 */
const winston = require('winston');
const config = require('./config');
const { combine, timestamp, colorize, label, printf } = winston.format;

const pkgjson = require('../../package.json');

winston.loggers.add('console', {
  level: config.LEVEL,
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize(),
        label({ label: pkgjson.name }),
        timestamp(),
        printf(({ level, message, label, timestamp }) => {
          return `${timestamp} [${label}] ${level}: ${message}`;
        })
      )
    })
  ],
});

module.exports = winston.loggers.get('console');

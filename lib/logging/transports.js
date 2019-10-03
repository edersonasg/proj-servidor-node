/**
 * @description Transports customizados.
 */
const path = require('path');
const winston = require('winston');
const { combine, timestamp, colorize, label, printf } = winston.format;

const config = require('./config');
const pkgjson = require('../../package.json');

/**
 * Obter transport de console customizado
 */
module.exports.customConsole = name_ => {
    return new winston.transports.Console({
        level: config.console_.level,
        format: combine(
            colorize(),
            label({ label: name_}),
            timestamp(),
            printf(({ level, message, label, timestamp }) => {
                return `${timestamp} [${label}] ${level}: ${message}`;
            })
        )
    })
};

/**
 * Obter transport de arquivo customizado
 */
module.exports.customFile = name_ => {
    const filename = path.join(__dirname, '../../logs', `${pkgjson.name}.log`)
    return new winston.transports.File({
        level: config.file_.level,
        options: { flags: config.file_.flags, encoding: config.file_.encoding },
        maxsize: 1024 * 1024 * config.file_.max_size, // config.file_.max_size = MB 
        maxFiles: config.file_.max_files,
        filename: filename,
        format: combine(
            label({ label: name_ }),
            timestamp(),
            printf(({ level, message, label, timestamp }) => {
                return `${timestamp} [${label}] ${level}: ${message}`;
            })
        )
    })
};

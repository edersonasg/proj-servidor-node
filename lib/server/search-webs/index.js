/**
 * @file search-routes
 * @description Gera uma lista de rotas disponiveis.
 * @author imovel.ai
 */
const fs = require('fs');
const path = require('path');
const config = require('./config');
const logger = require('../../logger');
const Schema = require('../../graphql-schema');

const listRouters = (fs.readdirSync(config.FOLDER.APP)).reduce((routes, dir) => {
  const routerFile = path.join(config.FOLDER.APP, dir, config.FOLDER.FIRST_FILE);
  if (fs.existsSync(routerFile) && fs.lstatSync(routerFile).isFile()) {
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const route = require(routerFile);
      if (typeof route === 'function' && route.name === config.EXPRESS.ROUTER) {
        routes.push(route);
      } else if (route instanceof Schema) {
        routes.push(route);
      }
    } catch (error) {
      logger.warn(`code: ${error.code} - message: ${error.message}`);
      logger.warn(error.stack);
    }
  }
  return routes;
}, []);

module.exports = listRouters;

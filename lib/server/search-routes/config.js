const path = require('path');

const ROUTER = 'router';
const APP = path.join(__dirname, '../../../apis');
const FIRST_FILE = 'index.js';

module.exports = {
  EXPRESS: {
    ROUTER
  },
  FOLDER: {
    APP,
    FIRST_FILE  
  }
};

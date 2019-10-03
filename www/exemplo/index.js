const express = require('express');
const router = express.Router();

/**
 * Controller para agendamento de visita
 */
router.get('/', function(req, res) {
    res.render('exemplo/index');
    return;
});


module.exports = router;
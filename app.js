var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var compression = require('compression');
var helmet = require('helmet');

// Require facilitado
global.reqlib = require('app-root-path').require;

// Configurações
var packagejson = require('./package');
// var config = require('./config/app.json');
var getListRoutes = require('./lib/server/router-list');

// Rotas do servidor
var routesList = require('./routes/index');

// Criando instancia do servidor
var app = express();

// compress all responses
app.use(compression());

// Security middleware
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, 'public')));

// // Modulos do node_modules que ficaram publicos
// const cfgFrontend = require('./config/frontend.json');
// cfgFrontend.library_modules.forEach(mod => {
//     app.use(path.join(cfgFrontend.public_folder, mod.name), express.static(path.join(__dirname, mod.folder)));
// });

routesList.forEach(route => {
    app.use(route)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Obter lista de rotas
const router_list = getListRoutes.get(app);

router_list.forEach(r => {
    console.log(`- Rota registrada: ${r.method} ${r.uri}`);
})

module.exports = app;
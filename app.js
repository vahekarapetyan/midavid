var express       = require('express');
var exphbs        = require('express-handlebars');
var mongoose      = require('mongoose');
var browserify    = require('browserify-middleware');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

// Routing variables.
var index     = require('./routes/index');
var bio       = require('./routes/bio');
var artworks  = require('./routes/artworks');
var chronic   = require('./routes/chronic');
var contact   = require('./routes/contact');
var media     = require('./routes/media');
var news      = require('./routes/news');

var app = express();

// view engine setup
app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'layout'}));
app.set('view engine', 'hbs');

// browserify handelbar templates in order to use it in front-end.
browserify.settings({
  transform: ['hbsfy']
});

// browserify
app.get('/javascripts/bundle.js', browserify('./client/script.js'));

// browser sync for easy development.
if (app.get('env') == 'development') {
  var browserSync = require('browser-sync');
  var config = {
    files: ["public/**/*.{js,css}", "client/*.js", "sass/**/*.scss", "views/**/*.hbs"],
    logLevel: 'debug',
    logSnippet: false,
    reloadDelay: 3000,
    reloadOnRestart: true
  };
  var bs = browserSync(config);
  app.use(require('connect-browser-sync')(bs));
}

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/fonts', express.static(path.join(__dirname, 'node_modules/bootstrap-sass/assets/fonts')));

// Map routers.
app.use('/', index);
app.use('/bio', bio);
app.use('/artworks', artworks);
app.use('/chronic', chronic);
app.use('/contact', contact);
app.use('/media', media);
app.use('/news', news);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;

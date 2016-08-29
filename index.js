var express = require('express'); 
var app = express();
 
app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(express.static('node_modules'));
 
app.get('/', function(req, res) {
  res.render('home', {
    title: 'FICHA DE ACOMPANHAMENTO', 
    autor: 'Carlos Henrique Nonnemacher'
  });
});
 
app.listen(3000);
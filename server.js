var express  = require('express');
var app      = express();
var port = 5000;
var path = require('path');

app.use(express.static( path.join(__dirname,'/')));
app.engine('html', require('ejs').renderFile);

app.get('/events.js',function(req,res){
    res.render('events.js');
});

app.get('/jquery.min.js',function(req,res){
    res.render('jquery.min.js');
});


app.get('/',function(req,res){
  res.render('/index.html');
});




app.listen(port);
console.log('server runs on port  ' + port);

var express = require('express');
var app = express();

/*
app.get('/:id', function(req, res) {
    console.log('Identyfikator, który został dopisany to ' + req.params.id);
    res.send('Hello GET! req.param.id to ' + req.params.id);
});
*/

app.get('/', function(req, res) {
    console.log('GET request received to \'/\'');
    res.send('Helołłłł, Łorld');
});

app.get('/r', function(req, res) {
    console.log('GET request received to \'/r\'');
    res.send('Hello world RRRRR');
});

app.get('/list_user', function (req, res) {
    console.log('GET request received to /list_user');
    res.send('Strona z listą użytkowników!');
});

/*
app.get('/ab*cd', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});
*/

app.post('/p', function(req, res) {
    console.log('Otrzymałem żądanie POST \'/\'');
    res.send('Hello POST!');
});

app.delete('/del_user', function (req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});


/*
var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});
*/

app.listen(3000);

app.use(function (req, res, next) {
    console.log('GET request received to \'undefined\'');
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
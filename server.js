var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res) {
    fs.readFile('./test.json', 'utf-8', (err, data) => {
        if (err) throw err;
        stringifyFile = data;
        stringifyFile = stringifyFile + req.params.note;
        fs.writeFile('./test.json', stringifyFile, (err) => {
            if (err) throw err;
            res.send(stringifyFile);
        });
    });
});

app.listen(3000);

app.use(function (req, res, next) {
    console.log('GET request received to \'undefined\'');
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
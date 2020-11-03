var express = require('express');
const bodyParser = require('body-parser');


var app = express();
var port = 4000;
app.use(express.static('client'));

app.listen(port, (err, result) => {
    if (err) {
        console.log('This is the error', err);
    }
    console.log('CSV Generator Starting Up...');
});

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.text());


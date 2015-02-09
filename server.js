var express = require('express');
var bodyParser = require('body-parser');
var port = 8080;

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


app.get('/interest_rate', function (req, res) {
	res.send((Math.random()*19+1).toFixed(2));
})




app.listen(port);
var express = require('express');
var app = express();

app.use('/', express.static(__dirname));

var server = app.listen(8980, function(){
	console.log( 'Listing on port %d', server.address().port )
})
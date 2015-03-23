var http = require('http'),
	fs = require('fs'),
	connect = require('connect'),
	serveStatic = require('serve-static');

var express = require('express');
var app = express();

// fs.readFile('./mvc.html', function(err, html) {
// 	if (err) {
// 		throw err;
// 	}

// 	var server = http.createServer(function(request, response) {
// 		response.writeHeader(200, {"Content-Type": "text/html"});
// 		response.write(html);
// 		response.end();
// 	});

// 	server.listen(process.argv[2] ||3000);


var server = http.createServer(app).listen(3000);

app.use(express.static('./'));

// app.get('/', function(req, res) {
// 	//res.send(require('path').dirname(require.main.filename) + '/index.html');
// 	res.sendFile(require('path').dirname(require.main.filename) + '/index.html');
// });

//connect().use(serveStatic('./')).listen(3000);

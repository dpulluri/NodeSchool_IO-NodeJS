var http = require('http');
var fs = require('fs');

var fileName = process.argv[3];

var server = http.createServer(function(request, response) {
	response.writeHead(200);
	var src = fs.createReadStream(fileName);
	src.on('open', function() {
		src.pipe(response);	
	});
});

server.listen(Number(process.argv[2]));

// var http = require('http')
//     var fs = require('fs')

//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })

//       fs.createReadStream(process.argv[3]).pipe(res)
//     })

//     server.listen(Number(process.argv[2]))
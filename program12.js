var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response){
	response.writeHead(200);
	request.pipe(map(function(chunk){
		var chunkStrArray = chunk.toString().split('');
		var retString = "";
		chunkStrArray.forEach(function(chunkStrChar){
			if(chunkStrChar !== ' ') {
				retString += chunkStrChar.toUpperCase()	;
			} else {
				retString += chunkStrChar;
			}
		});
		return retString;
	})).pipe(response);
});

server.listen(Number(process.argv[2]));

// var http = require('http')
//     var map = require('through2-map')

//     var server = http.createServer(function (req, res) {
//       if (req.method != 'POST')
//         return res.end('send me a POST\n')

//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })

//     server.listen(Number(process.argv[2]))
var url = require('url');
var http = require('http');

var server = http.createServer(function(request, response){
	if(request.method != 'GET') {
		return response.end('send me a GET\n')
	}
	var requestUrl = url.parse(request.url, true);
	var pathName = requestUrl['pathname'];
	//console.log(pathName);
	if(pathName === '/api/parsetime') {
		response.end(parsetime(requestUrl));
	} else if (pathName === '/api/unixtime') {
		response.end(unixtime(requestUrl));
	}
	//response.writeHead(200, { 'Content-Type': 'application/json' });
	//response.write(request.url);
});
server.listen(Number(process.argv[2]));

var parsetime = function(requestUrl) {
	var query = requestUrl['query'];
	var isoTime = query['iso'];

	var date = new Date(isoTime);
	var json = {};
	json['hour'] = date.getHours();
	json['minute'] = date.getMinutes();
	json['second'] = date.getSeconds();
	return JSON.stringify(json);

}

var unixtime = function(requestUrl) {
	var query = requestUrl['query'];
	var isoTime = query['iso'];

	var date = new Date(isoTime);
	var json = {};
	json['unixtime'] = date.getTime();
	return JSON.stringify(json);

}

// var http = require('http')
//     var url = require('url')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }

//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result

//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
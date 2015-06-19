var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
	var date = new Date();	
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var hours = date.getHours();
	var minutes = date.getMinutes();
  console.log('client connected');
 
  c.write(year + "-" + zeroFill(month) + "-" + zeroFill(day) + " " + zeroFill(hours) + ":" + zeroFill(minutes) + "\n");
  c.end();
});
server.listen(process.argv[2], function() { //'listening' listener
  console.log('server bound');
});

function zeroFill(str) {
	var content = "" + str;
	 if(content.length === 1) {
	 	return "0"+content;
	 } else {
	 	return content;
	 }
}

// var net = require('net')

//     function zeroFill(i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes())
//     }

//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))
var fs = require('fs');

var newLineCount = function () {
	var buffer = fs.readFileSync(process.argv[2]);
	var stringSplit = buffer.toString().split("\n");
	console.log(stringSplit.length-1);
}();

// var fs = require('fs')

//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
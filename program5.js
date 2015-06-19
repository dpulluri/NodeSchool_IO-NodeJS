var fs = require('fs');
var dirName = process.argv[2];
var fileExt = process.argv[3];

var filteredFS = function() {
	fs.readdir(dirName, function (err, list){
		for(var i=0; i< list.length; i++) {
			if(list[i].endsWith("."+fileExt)) {
				console.log(list[i]);
			}
		}
	})
}();

String.prototype.endsWith = function(str) {
	var lastIndex = this.lastIndexOf(str);
    return (lastIndex !== -1) && (lastIndex + str.length === this.length);
}

// var fs = require('fs')
//     var path = require('path')

//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })
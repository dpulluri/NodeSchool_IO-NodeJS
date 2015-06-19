var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExt, callback) {
	var filteredList = new Array();
	fs.readdir(dirName, function(err,list) {
		if(err) {
			return callback(err);
		}
		var count = 0
		list.forEach(function(file){
			if(path.extname(file) === '.' + fileExt) {
				filteredList[count] = file;
				count++;
			}
		})
		callback(null, filteredList);
	});
}

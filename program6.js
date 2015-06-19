var myModule = require('./program6Module.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];

var fileList = function() {
	myModule(dirName, fileExt, function(err, list){
		if(err) {
			console.log(err);
		}
		list.forEach(function(fileName) {
			console.log(fileName);
		});
	});
}();

// solution.js:

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]

//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)

//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

// ────────────────────────────────────────────────────────────────────────────────
// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }
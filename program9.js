var http = require('http');
var bl = require('bl');

var content = [];
var count = 0;
var getDataFromUrls = function() {
	for(var i=2; i< process.argv.length; i++) {
		(function(index){
			http.get(process.argv[index], function(response){
				response.pipe(bl(function(err,data){
					content[index-2] = data.toString();
				}));
				response.on("end", function() {
					count++;
					if(count == 3) {
						for(var k = 0; k<content.length; k++) {
							console.log(content[k]);
						}
					}
				});
			});	
		})(i);
	}
}();

// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0

//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }

//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)

//           results[index] = data.toString()
//           count++

//           if (count == 3)
//             printResults()
//         }))
//       })
//     }

//     for (var i = 0; i < 3; i++)
//       httpGet(i)
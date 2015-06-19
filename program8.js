var http = require('http');
var url = process.argv[2];
var responseString = "";
var charCount = function(){
	http.get(url, function(response) { 
		response.setEncoding("utf8");
		response.on("data", function(data){
			responseString += data;
		});
		response.on("end", function() {
			console.log(responseString.length);
			console.log(responseString);
		});
	});
}();

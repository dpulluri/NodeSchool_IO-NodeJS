var addSum = function addArguments() {
	if(process.argv.length < 3) {

	}
	var sum = 0;
	for(var i=2; i<process.argv.length; i++) {
		sum += Number(process.argv[i]);
	}
	console.log(sum);
}();
//addSum();

// var result = 0

//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])

//     console.log(result)
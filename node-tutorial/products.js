var fs = require('fs')


	var findProducts =function(fileName){  
		prodlist = [];
	fs.readFile(fileName, 'utf-8', function(err, data){
		var list = data.toString();
		var rows = list.split('\n');
		for(var x = 0; x < rows.length; x++){
			prodlist.push(rows[x].split(','));
		}
		
		console.log(prodlist);
		return prodlist;
	});
	};

findProducts('./files/products.csv');
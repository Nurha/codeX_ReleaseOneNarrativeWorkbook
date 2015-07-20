	var fs = require("fs");
	
	

	var findProducts = function (fileName) {
		// body...
		var productNames= [];
		var productMap = {};
	
		var fileContent = fs.readFileSync(fileName, "utf8");
		var products = fileContent.split("\n");
		
		products.forEach( function (product) {
				// body...
				var hold = product.split(",");
				var productName = hold[1];
				
				if (productMap[productName] === undefined && productName !== undefined) {
					productNames.push(productName);
					productMap[productName] = 0;	


				};

				

				
		});
			return productNames;

	}

	/*var findProductSold = function (fileName) {
		// body...
		var productNames= [];
		var productMap = {};
		var productsSold = [];
		var quantitySold = [];

		var fileContent = fs.readFileSync(fileName, "utf8");
		var products = fileContent.split("\n");
		
		products.forEach( function (product) {
				// body...
				var hold = product.split(",");
				var productName = hold[1];
				var productsSold = hold[2];
				if (productMap[productsSold] === undefined && productsSold != undefined) {
					productNames.push(productsSold);
					productMap[productName] = 0;	

					quantitySold[productName] = 0;
					productMap[productName] += quantitySold[productsSold]; 

				};

				
		});
			return productNames;
			
	}*/

module.exports = function(fileName){

  this.productNames = function(callback){
  	var files = findProducts(fileName);
    callback(null, files);
  };

  /*this.productsSold = function(callback){
  	var files = findProductSold(fileName);
   	callback(null, files);
  }	
*/
}
	 
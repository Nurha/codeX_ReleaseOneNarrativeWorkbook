
var fs = require('fs');// file system object
     var productNames = [];// a place to sore product names
     var productMap = {};

var findProducts = function (fileName) {
 		// body...

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

 module.exports = function(fileName){

   this.productNames = function(callback){
   	var files = findProducts(fileName)
     callback(null, files);
   	}
 }
//var fs = require('fs');

// var findProducts = function(fileName){
    
//         var productNames = [];
//         var productMap = {};
//         var soldItemsMap = {};
//         var quantitySold = [];

//     var fileContent = fs.readFileSync(fileName, "utf8");
//     var products = fileContent.split('\n');

//     products.forEach(function(product){
//                 var hold = product.split(',');
//                 var productName = hold[1];
//                 if(productMap[productName] === undefined){                         
//                         productNames.push(productName);
//                         productMap[productName] = 0;

//                 }

//         });

//         console.log(productNames);
//         console.log(quantitySold);
//         return productNames;

// };

var findProductsSold = function(fileName){
        
        var productNames = [];
        var productMap = {};
        var soldItemsMap = {};
        var quantitySold = [];

        var fileContent = fs.readFileSync(fileName, "utf8");
        var products = fileContent.split('\n');

        products.forEach(function(product){
                var hold = product.split(',');
                var productName = hold[1];
                var quantity = hold[2];
                if(productMap[productName] === undefined){                             
                        productNames.push(productName);
                        productMap[productName] = 0;

                }

                var prod = product.split(',');
                var soldItem = prod[1];
                if(soldItemsMap[soldItem] === undefined){
                        quantitySold.push(soldItem);
                        soldItemsMap[soldItem] = 0;
                        var totalItems = parseInt(soldItem)
                }

                  soldItemsMap[soldItem] = soldItemsMap[soldItem] + parseInt(quantity,10); 

        });

       console.log(productNames);
        console.log(soldItemsMap);
        return soldItemsMap;

};

module.exports = function(folderName){
   this.productNames = function(callback){                                                                                                                                                                                                                                                                                                                                                                                            
        var files = findProducts(folderName);
        callback(null, files);
    };

        this.productsSold = function(callback){
                var files = findProductsSold(folderName);
                callback(null, files);
        };

};





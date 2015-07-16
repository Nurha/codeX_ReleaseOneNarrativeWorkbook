

// var fs = require('fs');

// exports.linesInFiles = function(folder) {
	
// 	var files = fs.readdirSync(folder);//reading the directory of where the files are
// 	var productList = []// tells us everything should be in an array

// 	files.forEach(function(fileName) { //finds all the files in the folder, forEach is a loop

// 		var fileContent = fs.readFileSync(folder + '/' + fileName, 'utf8');//returns the content of the file, use utf8 to convert computer lang to human lang
// 		var products = fileContent.split('\n');//\n new line character, splits the content of the files into individual content

// 		products.forEach(function(product) {
// 			productList.push(product);//then push each row to a list
// 		});
// 	});
// 		return productList;//return the list that contains all the lines off all the files.
// 	};



// exports.linesInFilesAsync = function(folderName, callback){
// 	var files = fs.readdirSync(folderName);//reading the directory of where the files are
// 	var productList = []// tells us everything should be in an array

// 	files.forEach(function(fileName) { //finds all the files in the folder, forEach is a loop

// 		var fileContent = fs.readFileSync(folderName + '/' + fileName, 'utf8');//returns the content of the file, use utf8 to convert computer lang to human lang
// 		var products = fileContent.split('\n');//\n new line character, splits the content of the files into individual content

// 		products.forEach(function(product) {
// 			productList.push(product);//then push each row to a list
// 		});
// 	});
//         callback(null, productList);

   
//};
 
 var fs  = require("fs"); //file system object

  var findFiles = function (folder) {
  var files = fs.readdirSync(folder);
  
  var productList = []; 

  files.forEach(function (fileName) { 
     
    //how do I see what is inside of a file? 
    var fileContent = fs.readFileSync(folder + "/" + fileName, 'utf8'); 
    var products = fileContent.split("\n"); 
     
    products.forEach(function(product){ 
      console.log(product); 
      productList.push(product); 
    }); 
    
  });
  return productList;

}

exports.linesInFiles = function(folderName){ 

   var productList = findFiles(folderName);

    return productList; 
};

exports.linesInFilesAsync = function(folderName, callback) {
       var productList = findFiles(folderName);

  callback(null, productList);
};



  


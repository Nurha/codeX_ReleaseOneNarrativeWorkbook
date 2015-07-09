// a empty user list
var users = [];

//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });

users.push({ first_name : 'Jack', last_name : 'Bradshaw' });
users.push({ first_name : 'Callum', last_name : 'Bradshaw' });
users.push({ first_name : 'Neil', last_name : 'Bradshaw'});

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw

users.forEach(function(user) {

	console.log('Hi, '+ user.first_name + ' ' +  user.last_name + '!');
});

//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method

//Hi, first_name last_name!

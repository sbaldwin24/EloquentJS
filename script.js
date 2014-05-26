var result = 1;
var conunter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}

//This program equates two to the 10th power. 2^10 // 
console.log(result);
//The result is 1024 //


//////////---!!!! NEW EXERCISE ---!!!!! /////////
do {
	var name = prompt("Who are you?");
} while(!name);
console.log(name);

///This program will force you to enter your name. It will ask you AGAIN and AGAIN unitl it gets 
/// until it gets something that is not an empty string. 
/// Applying the "!" operator will convert a value to boolean type befor negating it, and all strings
/// except "" convert to true!!!!!!


//////////---!!!! NEW EXERCISE ---!!!!! /////////
for (var number = 0; number <= 12; number = number + 2)
console.log(number);

//The parentheses after a for keyword must contain two semicolons.
//The part before the first semicolon initalizes the loop, usually by defining a variable.
//The second part is the expression that checks whether the loop must continue.
//The final part updates the state of the loop after every iteration.
//In most cases, this is shorter and clearer than a while construct.
//Here is the code that computes 2^10, using for instead of while: 

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
	result = result * 2;
console.log(result);


/*------!!!! NEW EXAMPLE -------!!!!*/
switch (prompt("What is the weather like?")) {
	case "sunny":
		console.log("you should wear something light");
		break;
	case "rainy":
		console.log("Maybe you should bring an umbrella?");
		break;
	case "cloudy":
		console.log("Go check outside... you bitch");
		break;
	default:
		console.log("Not sure what the weather is like...");
		break;
}

/*Exercises*/
//Looping a triangle 

var loopingTriangle = function() {
	var brick = "#";
	for (var i = 0; i < 7; i++) {
		console.log(brick);
		brick += "#"
	}
}();
/* prints out 
# 
##
###
####
##### 
###### 
#######
*/
 
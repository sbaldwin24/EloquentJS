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
		console.log("You should wear something lite... or a tank top");
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

/*Exercises
Exercise 1
Looping a triangle 
*/

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

/*Exercise 2
Exercise 2 
FizzBuzz
*/

var fizzBuzz = function() {
	for (var i = 0; i < 101; i++) {
		if (i % 3 && i % 5) {
			console.log(i);
		} else if (i % 3) {
			console.log("Fizz");
		} else if (i % 3) {
			console.log("Buzz");
		} else {
			console.log("FizzBuzz");
		}
	}
}();
/* Prints out...
FizzBuzz  
1  
2  
FizzBuzz  
4  
Fizz  
FizzBuzz  
7  
8  
FizzBuzz  
Fizz  
11  
FizzBuzz 
13  
14  
FizzBuzz  
16  
17  
FizzBuzz  
19  
Fizz  
FizzBuzz  
22  
23  
FizzBuzz  
Fizz  
26  
FizzBuzz  
28  
29  
FizzBuzz  
31  
32  
FizzBuzz  
34  
Fizz  
FizzBuzz  
37  
38  
FizzBuzz  
Fizz  
41  
FizzBuzz  
43  
44  
FizzBuzz  
46  
47  
FizzBuzz  
49  
Fizz  
FizzBuzz  
52  
53  
FizzBuzz  
Fizz  
56  
FizzBuzz  
58  
59  
FizzBuzz  
61  
62  
FizzBuzz  
64  
Fizz  
FizzBuzz  
67  
68  
FizzBuzz  
Fizz  
71  
FizzBuzz  
73  
74  
FizzBuzz  
76  
77  
FizzBuzz  
79  
Fizz  
FizzBuzz  
82  
83  
FizzBuzz  
Fizz  
86  
FizzBuzz  
88  
89  
FizzBuzz  
91  
92  
FizzBuzz  
94  
Fizz
FizzBuzz  
97 
FizzBuzz  
Fizz 
*/
//End of FIZZBUZZ

/*Chessboard 
Last Exercise from Chapter 2!!
*/

var chessboard = function() {
	var board = "";
	var space = " ";
	var hash = "#";
	var size = 8;

	for (var y = 0; y < size; y++) {
		for (var x = 0; x < size; x++) {
			if ((y + x) % 2) 
				board += space;
			else
				board += hash;
		}
			board += "\n";
	}
		console.log(board);
}();

/* Prints out...
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
 */
//END OF EXERCISES


/************************* NEW CHAPTER **********************************
-----------CHAPTER 3 ---------------
*/ 

var makeNoise = function() {
	console.log("Pling!");
};
makeNoise();
//-> Pling!

var power = function(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
};
console.log(power(2,10));
//->1024

/*Some functions produce a value, such as power and square, and don't, such as makeNoise, which only produces
a side effect.
- A return statement determines the value the value the function returns. When control comes across such a statement,
it immediately jumps out of the current function and gives the returned value to the code that called the function.
The return keyword without an expression after it will cause the function to return undefined.
*/


var x = "outside";
var f1 = function() {
	var x = "inside f1";
};
f1();
console.log(x);
//-> outside

var f2 = function() {
	x = "inside f2";
};
f2();
console.log(x);
//-> inside f2
/*This defines and calls two functions that both assign a value to the variable x. 
The first one declares the variable as local and thus changes only the local variable. 
The second does not declare x locally, so references to x inside of it refer the global variable x defined
at the top of the example. 

*/

//NESTED SCOPE
var landscape = function() {
	var result = "";
	var result = function(size) {
		for (var count = 0; count < size; count++)
			result += "_";
	};
var mountain = function(size) {
	result += "/";
	for (var count = 0; count < size; count++)
		result += "'";
	result += "\\";
};

flat(3);
mountain(4);
flat(6);
mountain(1);
flat(1);
return result;
};

console.log(landscape());
//-> ___/''''\______/'\_

/*---The flat and mountain functions can "see" the variable called result, since they are inside of the function
that defines it. But they can not see each other's count variables, since they are outside each other's scope.
The environment outside of the landscape function doesn't see any of the variables defined inside of landscape.

In short, each local scope can also see all the local scopes that contain it. The set of variables visible inside
a function is determined by the place of that function in the program text. 

All variables from blocks "around" a function's definitions are visible -- meaning both those in function bodies 
that enclose it and those at the top level of the program. This approach to the variable visibility is called 
lexical scoping. 
*/

//FREE-STANDING BLOCKS:

var something = 1; 
{
	var something = 2;
	// Do stuff with variable something
}
// Outside of the block again...
/* But the something inside the block refers to the same variable as the one outside the block. 
In fact, although blocks like this are allowed, they are only useful to group the body of an if statement or loop. 

If you find this odd, you're not alone. The next version of JavaScript will introduce a let keyword, which works like var,
but creates a variable that is local to the enclosing block, not the enclosing function.
*/

//FUNCTIONS AS VALUES 
/* 

*/

//THE CALL STACK 
/*The author thinks it would be helpful to take a closer look at the way CONTROL FLOWS THROUGH FUNCTIONS... possibly. Here is a simple 
program that makes a few function calls.*/

function greet(who) {
	console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
//->Hello Harry
//->Bye

/* A run though this program goes roughly like this:
The call to greet causes control to jump to the start of that function (line 2). 
It calls console.log, which takes control, does its job, then returns control to line 2.
Then it reaches the end of the greet function, so it returns to the place that called it, at line 4. 
The line after that calls console.log again.

We could show the flow of control schematically like this:
*/
top	
	greet
		console.log
	greet
top
	console.log
top

/* Because a function has to jump back to the place of the call when it returns, the computer must remember the context from which
the function was called. In one case, console.log had to jump back to the greet function. In the other case, it jumps back to the 
end of the program. 

The place where the computer stores this context is the CALL STACK. Every time a function is called, the current context is put on top this 
"stack". When the function returns, it takes the top context from the stack and uses it to continue execution.

Storing this stack requires space in the computer's memory. When the stack grows too big, the computer will fail with a message like 
"out of stack space" or "too much recursion". The following code illustrates this by asking the computer a really hard question, which
causes an infinite back-and-forth between two functions. Rather, it would be infinite, if the computer had an infinite stack.
As it is, we will run out of space, or "blow the stack". */

function chicken() {
	return egg();
}
function egg() {
	return chicken();
}
console.log(chicken() + " came first.");
//-> ??



// Create a JavaScript program that will calculate the average grade for the whole class. Here are the points for each student:

// Martin = 76

// Thomas = 85

// Klaus = 65

// Maria = 93

// David = 81

// Based on their points, output the average class points and the grade, according to the following table:

// < 60 F

// < 70 D

// < 80 C

// < 90 B

// < 100 A



var values = [76,85,65,93,81];
var sum = 0
for (i = 0; i < values.length; i++) {

	 sum += values[i];
}

var avg = sum / values.length;


document.write(avg);

if (avg <60) {
	document.write("F")
}

else if (avg<70){
	document.write("D")
}

else if (avg<80){
	document.write("C")
}

else if (avg<90){
	document.write(" B")
}

else {
	document.write("A")
}

document.write("<br>")


// Intermediate Exercise 2 | FizzBuzz
// Create a JavaScript program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead 
// of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

a = prompt("insert Fizz")
b = prompt("insert Buzz")


function myFizzBuzz (a,b){

var x="";


for (i=1; i<101; i++) {

	if (i%a==0 && i%b==0){
		// document.getElementById("FizzBuzz").innerHTML=i;
		x+=" FizzBuzz ";
	}
	
	 else if(i%b==0){
		// document.getElementById("FizzBuzz").innerHTML=" Buzz ";
		x+="Buzz ";
	}

	else if (i%a==0) {
		// document.getElementById("FizzBuzz").innerHTML=" Fizz ";
		x+="Fizz ";}

	else{
		x+=i+" ";
	}
}

document.getElementById("FizzBuzz").innerHTML=x;
}

myFizzBuzz(3,5);





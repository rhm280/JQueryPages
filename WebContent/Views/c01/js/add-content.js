/*This script displays a greeting to the user based upon current local time.*/

var today = new Date();
var hourNow = today.getHours();
var greeting;

//Display greeting based on current time
if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
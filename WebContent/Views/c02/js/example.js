//Create variables for the welcome message

var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order;'
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element with id userSign then update contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get element with id tiles then update contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get element with id subTotal then update contents
var elSubTotal = document.getElementById('subTotal')/*.innerHTML*/;
elSubTotal.textContent = '$' + subTotal;

// Get element with id shipping then update contents
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

// Get element with id grandTotal then update contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
